import { Locator, Page, expect } from "@playwright/test"
import { DEFAULT_TEXT_TOOLTIP } from "../ui/NavigationTooltip"
import { NavigationPanel, NavigationSegments } from "../config"

export type Panels = Record<NavigationSegments, NavigationPanel>

export interface IPanel {
  select(): Promise<void>
  assertIsVisible(): Promise<void>
  getBgColorFromCSS(): Promise<string>

}

export interface ITooltip {
  assertIsShown(): Promise<void>
  assertTriggerButtonIsVisible(): Promise<void>
  assertContainsCorrectDescription(): Promise<void>
  assertTriggerToHaveCorrectColor(color: string): Promise<void>
  assertRecordedInLocalStorage(): Promise<void>
  writeToLocalStorage(): Promise<void>
}


export class NavigationComponent {
  private readonly _panels: Panels
  private readonly _page: Page

  constructor(panels: Panels, page: Page) {
    this._panels = panels
    this._page = page
  }

  initPanel(segment: NavigationSegments): IPanel {
    return new Panel(this._page, this._panels[segment])
  }

  getTooltipFor(segment: NavigationSegments): ITooltip {
    return new Tooltip(this._page, this._panels[segment])
  }
}

class Panel implements IPanel {
  private readonly _panelLocator: Locator
  constructor(
    private readonly _page: Page,
    private readonly _panel: NavigationPanel,
  ) {
    this._panelLocator = this._page.locator(`[data-testid="${this._panel.segment}"]`)
  }

  async select(): Promise<void> {
    await this._page.goto(`${process.env.BASE_URL}/rz/${this._panel.segment}-movie`)
  }

  async assertIsVisible(): Promise<void> {
    await expect(this._panelLocator).toBeVisible()
  }

  async getBgColorFromCSS(): Promise<string> {
    return await this._panelLocator.evaluate((elem) => {
      return window.getComputedStyle(elem).backgroundColor
    })
  }
}

class Tooltip implements ITooltip {
  private readonly _defaultSegment = 'default'
  private readonly _defaultDescription = DEFAULT_TEXT_TOOLTIP
  private readonly _tooltipDescriptionLocator: Locator
  private readonly _triggerButtonLocator: Locator
  constructor(
    private readonly _page: Page,
    private readonly _panel: NavigationPanel,
  ) {
    this._tooltipDescriptionLocator = this._page.locator('[data-testid="nav-tooltip-description"]')
    this._triggerButtonLocator = this._page.locator('[data-testid="nav-tooltip-trigger"]')
  }

  async assertIsShown(): Promise<void> {
    await expect(this._tooltipDescriptionLocator).toBeVisible()
  }

  async assertContainsCorrectDescription(): Promise<void> {
    await expect(this._tooltipDescriptionLocator).toContainText(this._panel.aboutRu)
  }

  async assertTriggerButtonIsVisible(): Promise<void> {
    await expect(this._triggerButtonLocator).toBeVisible()
  }

  async assertTriggerToHaveCorrectColor(color: string): Promise<void> {
    await expect(this._triggerButtonLocator).toHaveCSS('color', color)
  }

  async assertRecordedInLocalStorage(): Promise<void> {
    const value = await this._page.evaluate(() => {
      const data = localStorage.getItem('navigationTooltipsThatWereShown')

      if (!data) return
      return JSON.parse(data)
    })

    expect(value).toEqual([this._defaultSegment, this._panel.segment])
  }

  async writeToLocalStorage(): Promise<void> {
    await this._page.evaluate((segments) => {
      const value = JSON.stringify([...segments])
      localStorage.setItem('navigationTooltipsThatWereShown', value)
    }, [this._defaultSegment, this._panel.segment])

  }
}
