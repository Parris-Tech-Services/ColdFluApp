import { test, expect } from "@playwright/test";

const titles = [
  "Oral Mucosal Diseases: Part One",
  "Oral Mucosal Diseases: Part Two",
  "Navigating Oral Ulcerative Conditions: When to Treat, Refer, or Reassure"
];
const streamOrigins = ["traffic.omny.fm", "traffic.omny.fm", "cdn.vivarep.com"];

test("all three oral-health podcasts play on desktop and mobile browsers", async ({page}) => {
  test.setTimeout(95_000);
  await page.goto("/listen");
  await expect(page.getByRole("heading", {name:/mouth ulcer podcasts/i}).first()).toBeVisible();
  const audio = page.locator("main audio");
  const iframes = page.locator("main iframe");
  await expect(audio).toHaveCount(3);
  await expect(iframes).toHaveCount(3);
  for (let i=0;i<3;i++) {
    const player = audio.nth(i);
    await expect(page.getByRole("heading", {name:titles[i],exact:true})).toBeVisible();
    await expect(player).toHaveAttribute("aria-label", `Listen to ${titles[i]}`);
    const src = await player.locator("source").getAttribute("src");
    expect(new URL(src!).hostname).toBe(streamOrigins[i]);
    await player.scrollIntoViewIfNeeded();
    await expect(player).toBeVisible();

    const playback = await player.evaluate(async el => {
      const audio = el as HTMLAudioElement;
      audio.muted=true;
      audio.preload="auto";
      audio.load();
      let result: { status:string; time?:number; error?:string };
      try {
        result=await Promise.race([
          audio.play().then(() => new Promise<{status:string;time:number}>(resolve => setTimeout(() => resolve({status:"played",time:audio.currentTime}),1600))),
          new Promise<{status:string}>(resolve=>setTimeout(()=>resolve({status:"timeout"}),20000))
        ]);
      } catch(err) {
        result={status:"rejected",error:String(err)};
      }
      audio.pause();
      return {...result,readyState:audio.readyState,networkState:audio.networkState,mediaError:audio.error?.code ?? null};
    });
    console.log(`Oral podcast ${i+1}: ${JSON.stringify(playback)}`);
    expect(playback.status, `Podcast ${i+1} plays`).toBe("played");
    expect(playback.time, `Podcast ${i+1} progresses`).toBeGreaterThan(0);

    await page.locator("main details").nth(i).locator("summary").click();
    await expect(iframes.nth(i)).toBeVisible();
  }
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1);
  expect(overflow, "No horizontal overflow on mobile").toBe(false);
});
