import * as React from "react";

/**
 * Рамка окна приложения для скриншота и рамка телефона.
 * @startingPoint section="Media" subtitle="Скриншот в окне / в телефоне" viewport="700x400"
 */
export interface ShotFrameProps extends React.HTMLAttributes<HTMLElement> {
  src: string;
  alt?: string;
  /** Подпись в адресной строке */
  url?: string;
}
export function ShotFrame(props: ShotFrameProps): JSX.Element;
export interface PhoneFrameProps extends React.HTMLAttributes<HTMLElement> {
  src: string;
  alt?: string;
}
export function PhoneFrame(props: PhoneFrameProps): JSX.Element;
