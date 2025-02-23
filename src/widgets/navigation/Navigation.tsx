"use client";
import { navigationPanels } from "./config/navigationConfig";
import { NavigationManager } from "./ui/NavigationManager";

export const Navigation = () => {
  return (
    <>
      <NavigationManager configuration={navigationPanels}>
        <NavigationManager.Toggle segment={"instincts"}>
          <NavigationManager.Links
            path={`/rz/instincts-movie`}
            label={"Фильмы"}
          />
          <NavigationManager.Links
            path={`/rz/instincts-music`}
            label={"Музыка"}
          />
          <NavigationManager.Links
            path={`/rz/instincts-books`}
            label={"Книги"}
          />
          <NavigationManager.Links
            path={`/rz/instincts-art`}
            label={"Живопись"}
          />
        </NavigationManager.Toggle>
        <NavigationManager.Toggle segment={"balance"}>
          <NavigationManager.Links
            path={`/rz/balance-movie`}
            label={"Фильмы"}
          />
          <NavigationManager.Links
            path={`/rz/balance-music`}
            label={"Музыка"}
          />
          <NavigationManager.Links path={`/rz/balance-books`} label={"Книги"} />
          <NavigationManager.Links
            path={`/rz/balance-art`}
            label={"Живопись"}
          />
        </NavigationManager.Toggle>
        <NavigationManager.Toggle segment={"intellect"}>
          <NavigationManager.Links
            path={`/rz/intellect-movie`}
            label={"Фильмы"}
          />
          <NavigationManager.Links
            path={`/rz/intellect-music`}
            label={"Музыка"}
          />
          <NavigationManager.Links
            path={`/rz/intellect-books`}
            label={"Книги"}
          />
          <NavigationManager.Links
            path={`/rz/intellect-art`}
            label={"Живопись"}
          />
        </NavigationManager.Toggle>
      </NavigationManager>
    </>
  );
};
