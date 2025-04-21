const green = '165 45% 21%'
const green2 = '165 45% 22%'

const red = '0 84.2% 60.2%'
const red2 = '0 62.8% 30.6%'
const red3 = '0 72.2% 50.6%'

const white = '0 0% 100%'
const white2 = '0 0% 98%'
const white3 = '0 0% 96.1%'
const white4 = '0 0% 95%'
const white5 = '355.7 100% 97.3%'
const white6 = '0 85.7% 97.3%'

const gray = '240 4.8% 95.9%'
const gray2 = '240 3.8% 46.1%'
const gray3 = '240 5.9% 90%'
const gray4 = '240 5% 64.9%'
const gray5 = '240 4.9% 83.9%'
const gray6 = '0 0% 63.9%'
const gray7 = '224 71.4% 4.1%'
const gray8 = '220.9 39.3% 11%'
const gray9 = '210 20% 98%'
const gray10 = '220 14.3% 95.9%'
const gray11 = '220 13% 91%'
const gray12 = '215 27.9% 16.9%'
const gray13 = '217.9 10.6% 64.9%'
const gray14 = '216 12.2% 83.9%'
const grayLightAccent = '220 8.9% 46.1%'
const grayDarkAccent = '215 13.8% 34.1%'

const black = '240 10% 3.9%'
const black2 = '240 3.7% 15.9%'
const black3 = '24 9.8% 10%'
const black4 = '0 0% 9%'
const black5 = '20 14.3% 4.1%'
const black6 = '240 5.9% 10%'
const black7 = '0 0% 14.9%'
const black8 = '0 0% 3.9%'
const black9 = '12 6.5% 15.1%'
const black10 = '0 0% 15%'
const black11 = '144.9 80.4% 10%'
const black12 = '26 83.3% 14.1%'

const zinc = '240 5.2% 33.9%'

const rose = '346.8 77.2% 49.8%'

const neutral = '0 0% 45.1%'
const neutral2 = '0 0% 89.8%'
const neutral3 = '0 0% 83.1%'
const neutralDark = '0 0% 32.2%'

const orange = '24.6 95% 53.1%'
const orangeDark = '20.5 90.2% 48.2%'
const orangeDark2 = '35.5 91.7% 32.9%'

const yellow = '47.9 95.8% 53.1%'

const violet = '262.1 83.3% 57.8%'
const violet2 = '263.4 70% 50.4%'

const slate = '215.4 16.3% 46.9%'
const slate2 = '215.3 19.3% 34.5%'
const slate3 = '222.2 84% 4.9%'
const slate4 = '222.2 47.4% 11.2%'
const slate5 = '210 40% 98%'
const slate6 = '210 40% 96.1%'
const slate7 = '214.3 31.8% 91.4%'
const slate8 = '217.2 32.6% 17.5%'
const slate9 = '215 20.2% 65.1%'
const slate10 = '212.7 26.8% 83.9'
const slateDark = '33.3 5.5% 32.4%'

const stone = '25 5.3% 44.7%'
const stone2 = '60 9.1% 97.8%'
const stone3 = '60 4.8% 95.9%'
const stone4 = '20 5.9% 90%'
const stone5 = '24 5.4% 63.9%'
const stone6 = '24 5.7% 82.9%'

const blue = '221.2 83.2% 53.3%'
const blue2 = '217.2 91.2% 59.8%'


export const themes = [
  {
    name: 'zinc',
    label: 'Zinc',
    activeColor: {
      light: black6,
      dark: zinc,
    },
    cssVars: {
      light: {
        'background': white,
        'foreground': black,
        'card': white,
        'card-foreground': black,
        'popover': white,
        'popover-foreground': black,
        'primary': black6,
        'primary-foreground': white2,
        'secondary': gray,
        'secondary-foreground': black6,
        'muted': gray,
        'muted-foreground': gray2,
        'accent': gray,
        'accent-foreground': black6,
        'destructive': red,
        'destructive-foreground': white2,
        'border': gray3,
        'input': gray3,
        'ring': black6,
        'radius': '0.5rem',
      },
      dark: {
        'background': black,
        'foreground': white2,
        'card': black,
        'card-foreground': white2,
        'popover': black,
        'popover-foreground': white2,
        'primary': white2,
        'primary-foreground': black6,
        'secondary': black2,
        'secondary-foreground': white2,
        'muted': black2,
        'muted-foreground': gray4,
        'accent': black2,
        'accent-foreground': white2,
        'destructive': red2,
        'destructive-foreground': white2,
        'border': black2,
        'input': black2,
        'ring': gray5,
      },
    },
  },
  {
    name: 'slate',
    label: 'Slate',
    activeColor: {
      light: slate,
      dark: slate2,
    },
    cssVars: {
      light: {
        'background': white,
        'foreground': slate3,
        'card': white,
        'card-foreground': slate3,
        'popover': white,
        'popover-foreground': slate3,
        'primary': slate4,
        'primary-foreground': slate5,
        'secondary': slate6,
        'secondary-foreground': slate4,
        'muted': slate6,
        'muted-foreground': slate,
        'accent': slate6,
        'accent-foreground': slate4,
        'destructive': red,
        'destructive-foreground': slate5,
        'border': slate7,
        'input': slate7,
        'ring': slate3,
        'radius': '0.5rem',
      },
      dark: {
        'background': slate3,
        'foreground': slate5,
        'card': slate3,
        'card-foreground': slate5,
        'popover': slate3,
        'popover-foreground': slate5,
        'primary': slate5,
        'primary-foreground': slate4,
        'secondary': slate8,
        'secondary-foreground': slate5,
        'muted': slate8,
        'muted-foreground': slate9,
        'accent': slate8,
        'accent-foreground': slate5,
        'destructive': red2,
        'destructive-foreground': slate5,
        'border': slate8,
        'input': slate8,
        'ring': slate10,
      },
    },
  },
  {
    name: 'stone',
    label: 'Stone',
    activeColor: {
      light: stone,
      dark: slateDark,
    },
    cssVars: {
      light: {
        'background': white,
        'foreground': black5,
        'card': white,
        'card-foreground': black5,
        'popover': white,
        'popover-foreground': black5,
        'primary': black3,
        'primary-foreground': stone2,
        'secondary': stone3,
        'secondary-foreground': black3,
        'muted': stone3,
        'muted-foreground': stone,
        'accent': stone3,
        'accent-foreground': black3,
        'destructive': red,
        'destructive-foreground': stone2,
        'border': stone4,
        'input': stone4,
        'ring': black5,
        'radius': '0.95rem',
      },
      dark: {
        'background': black5,
        'foreground': stone2,
        'card': black5,
        'card-foreground': stone2,
        'popover': black5,
        'popover-foreground': stone2,
        'primary': stone2,
        'primary-foreground': black3,
        'secondary': black9,
        'secondary-foreground': stone2,
        'muted': black9,
        'muted-foreground': stone5,
        'accent': black9,
        'accent-foreground': stone2,
        'destructive': red2,
        'destructive-foreground': stone2,
        'border': black9,
        'input': black9,
        'ring': stone6,
      },
    },
  },
  {
    name: 'gray',
    label: 'Gray',
    activeColor: {
      light: grayLightAccent,
      dark: grayDarkAccent,
    },
    cssVars: {
      light: {
        'background': white,
        'foreground': gray7,
        'card': white,
        'card-foreground': gray7,
        'popover': white,
        'popover-foreground': gray7,
        'primary': gray8,
        'primary-foreground': gray9,
        'secondary': gray10,
        'secondary-foreground': gray8,
        'muted': gray10,
        'muted-foreground': grayLightAccent,
        'accent': gray10,
        'accent-foreground': gray8,
        'destructive': red,
        'destructive-foreground': gray9,
        'border': gray11,
        'input': gray11,
        'ring': gray7,
        'radius': '0.35rem',
      },
      dark: {
        'background': gray7,
        'foreground': gray9,
        'card': gray7,
        'card-foreground': gray9,
        'popover': gray7,
        'popover-foreground': gray9,
        'primary': gray9,
        'primary-foreground': gray8,
        'secondary': gray12,
        'secondary-foreground': gray9,
        'muted': gray12,
        'muted-foreground': gray13,
        'accent': gray12,
        'accent-foreground': gray9,
        'destructive': red2,
        'destructive-foreground': gray9,
        'border': gray12,
        'input': gray12,
        'ring': gray14,
      },
    },
  },
  {
    name: 'neutral',
    label: 'Neutral',
    activeColor: {
      light: neutral,
      dark: neutralDark,
    },
    cssVars: {
      light: {
        'background': white,
        'foreground': black8,
        'card': white,
        'card-foreground': black8,
        'popover': white,
        'popover-foreground': black8,
        'primary': black4,
        'primary-foreground': white2,
        'secondary': white3,
        'secondary-foreground': black4,
        'muted': white3,
        'muted-foreground': neutral,
        'accent': white3,
        'accent-foreground': black4,
        'destructive': red,
        'destructive-foreground': white2,
        'border': neutral2,
        'input': neutral2,
        'ring': black8,
      },
      dark: {
        'background': black8,
        'foreground': white2,
        'card': black8,
        'card-foreground': white2,
        'popover': black8,
        'popover-foreground': white2,
        'primary': white2,
        'primary-foreground': black4,
        'secondary': black7,
        'secondary-foreground': white2,
        'muted': black7,
        'muted-foreground': gray6,
        'accent': black7,
        'accent-foreground': white2,
        'destructive': red2,
        'destructive-foreground': white2,
        'border': black7,
        'input': black7,
        'ring': neutral3,
      },
    },
  },
  {
    name: 'red',
    label: 'Red',
    activeColor: {
      light: red3,
      dark: red3,
    },
    cssVars: {
      light: {
        'background': white,
        'foreground': black8,
        'card': white,
        'card-foreground': black8,
        'popover': white,
        'popover-foreground': black8,
        'primary': red3,
        'primary-foreground': white6,
        'secondary': white3,
        'secondary-foreground': black4,
        'muted': white3,
        'muted-foreground': neutral,
        'accent': white3,
        'accent-foreground': black4,
        'destructive': red,
        'destructive-foreground': white2,
        'border': neutral2,
        'input': neutral2,
        'ring': red3,
        'radius': '0.4rem',
      },
      dark: {
        'background': black8,
        'foreground': white2,
        'card': black8,
        'card-foreground': white2,
        'popover': black8,
        'popover-foreground': white2,
        'primary': red3,
        'primary-foreground': white6,
        'secondary': black7,
        'secondary-foreground': white2,
        'muted': black7,
        'muted-foreground': gray6,
        'accent': black7,
        'accent-foreground': white2,
        'destructive': red2,
        'destructive-foreground': white2,
        'border': black7,
        'input': black7,
        'ring': red3,
      },
    },
  },
  {
    name: 'rose',
    label: 'Rose',
    activeColor: {
      light: rose,
      dark: rose,
    },
    cssVars: {
      light: {
        'background': white,
        'foreground': black,
        'card': white,
        'card-foreground': black,
        'popover': white,
        'popover-foreground': black,
        'primary': rose,
        'primary-foreground': white5,
        'secondary': gray,
        'secondary-foreground': black6,
        'muted': gray,
        'muted-foreground': gray2,
        'accent': gray,
        'accent-foreground': black6,
        'destructive': red,
        'destructive-foreground': white2,
        'border': gray3,
        'input': gray3,
        'ring': rose,
        'radius': '0.5rem',
      },
      dark: {
        'background': black5,
        'foreground': white4,
        'popover': black4,
        'popover-foreground': white4,
        'card': black3,
        'card-foreground': white4,
        'primary': rose,
        'primary-foreground': white5,
        'secondary': black2,
        'secondary-foreground': white2,
        'muted': black10,
        'muted-foreground': gray4,
        'accent': black9,
        'accent-foreground': white2,
        'destructive': red2,
        'destructive-foreground': white6,
        'border': black2,
        'input': black2,
        'ring': rose,
      },
    },
  },
  {
    name: 'orange',
    label: 'Orange',
    activeColor: {
      light: orange,
      dark: orangeDark,
    },
    cssVars: {
      light: {
        'background': white,
        'foreground': black5,
        'card': white,
        'card-foreground': black5,
        'popover': white,
        'popover-foreground': black5,
        'primary': orange,
        'primary-foreground': stone2,
        'secondary': stone3,
        'secondary-foreground': black3,
        'muted': stone3,
        'muted-foreground': stone,
        'accent': stone3,
        'accent-foreground': black3,
        'destructive': red,
        'destructive-foreground': stone2,
        'border': stone4,
        'input': stone4,
        'ring': orange,
        'radius': '0.95rem',
      },
      dark: {
        'background': black5,
        'foreground': stone2,
        'card': black5,
        'card-foreground': stone2,
        'popover': black5,
        'popover-foreground': stone2,
        'primary': orangeDark,
        'primary-foreground': stone2,
        'secondary': black9,
        'secondary-foreground': stone2,
        'muted': black9,
        'muted-foreground': stone5,
        'accent': black9,
        'accent-foreground': stone2,
        'destructive': red3,
        'destructive-foreground': stone2,
        'border': black9,
        'input': black9,
        'ring': orangeDark,
      },
    },
  },
  {
    name: 'green',
    label: 'Green',
    activeColor: {
      light: green,
      dark: green2,
    },
    cssVars: {
      light: {
        'background': white,
        'foreground': black,
        'card': white,
        'card-foreground': black,
        'popover': white,
        'popover-foreground': black,
        'primary': green,
        'primary-foreground': white5,
        'secondary': gray,
        'secondary-foreground': black6,
        'muted': gray,
        'muted-foreground': gray2,
        'accent': gray,
        'accent-foreground': black6,
        'destructive': red,
        'destructive-foreground': white2,
        'border': gray3,
        'input': gray3,
        'ring': green,
      },
      dark: {
        'background': black5,
        'foreground': white4,
        'popover': black4,
        'popover-foreground': white4,
        'card': black3,
        'card-foreground': white4,
        'primary': green,
        'primary-foreground': black11,
        'secondary': black2,
        'secondary-foreground': white2,
        'muted': black10,
        'muted-foreground': gray4,
        'accent': black9,
        'accent-foreground': white2,
        'destructive': red2,
        'destructive-foreground': white6,
        'border': black2,
        'input': black2,
        'ring': green,
      },
    },
  },
  {
    name: 'blue',
    label: 'Blue',
    activeColor: {
      light: blue,
      dark: blue2,
    },
    cssVars: {
      light: {
        'background': white,
        'foreground': slate3,
        'card': white,
        'card-foreground': slate3,
        'popover': white,
        'popover-foreground': slate3,
        'primary': blue,
        'primary-foreground': slate5,
        'secondary': slate6,
        'secondary-foreground': slate4,
        'muted': slate6,
        'muted-foreground': slate,
        'accent': slate6,
        'accent-foreground': slate4,
        'destructive': red,
        'destructive-foreground': slate5,
        'border': slate7,
        'input': slate7,
        'ring': blue,
      },
      dark: {
        'background': slate3,
        'foreground': slate5,
        'card': slate3,
        'card-foreground': slate5,
        'popover': slate3,
        'popover-foreground': slate5,
        'primary': blue2,
        'primary-foreground': slate4,
        'secondary': slate8,
        'secondary-foreground': slate5,
        'muted': slate8,
        'muted-foreground': slate9,
        'accent': slate8,
        'accent-foreground': slate5,
        'destructive': red2,
        'destructive-foreground': slate5,
        'border': slate8,
        'input': slate8,
        'ring': '224.3 76.3% 48%',
      },
    },
  },
  {
    name: 'yellow',
    label: 'Yellow',
    activeColor: {
      light: yellow,
      dark: yellow,
    },
    cssVars: {
      light: {
        'background': white,
        'foreground': black5,
        'card': white,
        'card-foreground': black5,
        'popover': white,
        'popover-foreground': black5,
        'primary': yellow,
        'primary-foreground': black12,
        'secondary': stone3,
        'secondary-foreground': black3,
        'muted': stone3,
        'muted-foreground': stone,
        'accent': stone3,
        'accent-foreground': black3,
        'destructive': red,
        'destructive-foreground': stone2,
        'border': stone4,
        'input': stone4,
        'ring': black5,
        'radius': '0.95rem',
      },
      dark: {
        'background': black5,
        'foreground': stone2,
        'card': black5,
        'card-foreground': stone2,
        'popover': black5,
        'popover-foreground': stone2,
        'primary': yellow,
        'primary-foreground': black12,
        'secondary': black9,
        'secondary-foreground': stone2,
        'muted': black9,
        'muted-foreground': stone5,
        'accent': black9,
        'accent-foreground': stone2,
        'destructive': red2,
        'destructive-foreground': stone2,
        'border': black9,
        'input': black9,
        'ring': orangeDark2,
      },
    },
  },
  {
    name: 'violet',
    label: 'Violet',
    activeColor: {
      light: violet,
      dark: violet2,
    },
    cssVars: {
      light: {
        'background': white,
        'foreground': gray7,
        'card': white,
        'card-foreground': gray7,
        'popover': white,
        'popover-foreground': gray7,
        'primary': violet,
        'primary-foreground': gray9,
        'secondary': gray10,
        'secondary-foreground': gray8,
        'muted': gray10,
        'muted-foreground': grayLightAccent,
        'accent': gray10,
        'accent-foreground': gray8,
        'destructive': red,
        'destructive-foreground': gray9,
        'border': gray11,
        'input': gray11,
        'ring': violet,
      },
      dark: {
        'background': gray7,
        'foreground': gray9,
        'card': gray7,
        'card-foreground': gray9,
        'popover': gray7,
        'popover-foreground': gray9,
        'primary': violet2,
        'primary-foreground': gray9,
        'secondary': gray12,
        'secondary-foreground': gray9,
        'muted': gray12,
        'muted-foreground': gray13,
        'accent': gray12,
        'accent-foreground': gray9,
        'destructive': red2,
        'destructive-foreground': gray9,
        'border': gray12,
        'input': gray12,
        'ring': violet2,
      },
    },
  },
] as const

export type Theme = (typeof themes)[number]
