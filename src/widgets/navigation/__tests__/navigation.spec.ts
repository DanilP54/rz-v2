import { test as base, type Locator } from "@playwright/test";
import { IPanel, ITooltip, NavigationComponent, Panels } from "./fixture";
import { navigationPanelsConfig, NavigationSegments } from "../config";

type NavigationFixture = {
  navigation: NavigationComponent
}

const panels = navigationPanelsConfig.reduce((acc, panel) => {
  acc[panel.segment] = panel
  return acc
}, {} as Panels)


const test = base.extend<NavigationFixture>({
  navigation: async ({ page }, use) => {
    await use(new NavigationComponent(panels, page))
  },
})

const SEGMENTS = navigationPanelsConfig.reduce((acc, panel) => {
  acc.push(panel.segment)
  return acc
}, [] as NavigationSegments[])


test.describe("The user selects a segments panel for the first time and sees a tooltips", () => {

  SEGMENTS.forEach((segment) => {
    test.describe(segment.toUpperCase(), () => {
      let panel: IPanel
      let tooltip: ITooltip

      test.beforeEach(async ({ navigation }) => {
        panel = navigation.initPanel(segment)
        tooltip = navigation.getTooltipFor(segment)

        await panel.select()
        await panel.assertIsVisible()
      })

      test("The tooltip is shown and displayed correctly when selected panel", async () => {
        await tooltip.assertIsShown()
        await tooltip.assertContainsCorrectDescription()
      })
    })
  })
})


test.describe("The user selects a panel, but the prompts don't pop up because the user has already seen them.", () => {

  SEGMENTS.forEach((segment) => {
    test.describe(segment.toUpperCase(), () => {
      let panel: IPanel
      let tooltip: ITooltip

      test.beforeEach(async ({ navigation, page }) => {
        panel = navigation.initPanel(segment)
        tooltip = navigation.getTooltipFor(segment)

        await page.goto('/rz')


        await tooltip.writeToLocalStorage()
        await tooltip.assertRecordedInLocalStorage()
        await panel.select()
        await panel.assertIsVisible()
      })

      test("The panel is selected, the prompt does not pop up and the trigger button is colored in the color of the panel.", async () => {
        await tooltip.assertTriggerButtonIsVisible()
        const color = await panel.getBgColorFromCSS()
        await tooltip.assertTriggerToHaveCorrectColor(color)
      })
    })
  })
})
