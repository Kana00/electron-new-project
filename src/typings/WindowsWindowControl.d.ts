/**
 * @param colorOfControl a color in format hexadecimal color
 * @param height size of height image in pixel
 * @param onOverColor when mouse is hover on the element, the color must change in this color
 */
interface WindowsWindowControlPropsType {
  colorOfControl: string,
  height: string,
}

interface WindowsWindowControlStateType {
  isMaxSizeWindow: boolean,
  isOverMinus: boolean,
  isOverPlus: boolean,
  isOverClose: boolean
};
