import { FONT_SIZE, FONT_WEIGHT } from './font';
import { PALETTE } from './palette';

const LARGE_RED_BUTTON_PROPS = {
  fontSize: FONT_SIZE.LG,
  fontWeight: FONT_WEIGHT.BOLD,
  textColor: 'white',
  backgroundColor: PALETTE.RED_600,
} as const;

const SMALL_RED_OUTLINED_BUTTON_PROPS = {
  fontSize: FONT_SIZE.XS,
  fontWeight: FONT_WEIGHT.MEDIUM,
  textColor: PALETTE.RED_400,
  borderColor: PALETTE.RED_400,
  borderRadius: '0.75rem',
  backgroundColor: 'white',
} as const;

export const BUTTON_PROPS = {
  LARGE_RED_BUTTON_PROPS,
  SMALL_RED_OUTLINED_BUTTON_PROPS,
} as const;