import { classNames } from "shared/lib/classNames/classNames";
import cls from './ThemeSwitcher.module.scss'
import React from "react";
import { Theme, useTheme } from "app/providers/ThemeProvider";
import DarkThemeIcon from 'shared/assets/icons/DarkThemeIcon.svg';
import LightThemeIcon from 'shared/assets/icons/LightThemeIcon.svg';
import { Button, ThemeButton } from "shared/ui/Button/Button";


interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
  const {theme, toggleTheme} = useTheme();


  return (
    <Button
      className={classNames(cls.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}
      theme={ThemeButton.CLEAR}
    >
      {theme === Theme.DARK ? <DarkThemeIcon/> : <LightThemeIcon/>}
    </Button>
  );
};

