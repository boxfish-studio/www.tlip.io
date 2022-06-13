const pxToRem = (px, base = 16) => `${px / base}rem`
module.exports = {
    purge: {
        content: [
            "./src/**/*.{html,js,svelte,ts,scss}"
        ]
    },
    darkMode: "class",
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1.5rem',
                md: '4.5rem',
                xl: '7rem',
                '2xl': '7rem',
            },
        },
        extend: {
            colors: {
                blue: {
                    100: '#C7F4F4',
                    200: '#96D5F6',
                    300: '#64A9D1',
                    400: '#2D7AA0',
                    500: '#004E71',
                    600: '#002645',
                },
                green: {
                    100: '#DBE4DA',
                    200: '#C3D5C2',
                    300: '#3CB878',
                    400: '#00874C',
                    500: '#005923',
                    600: '#002E00',
                },
                grey: {
                    100: '#E0E0E0',
                    200: '#9E9E9E',
                    300: '#616161',
                    400: '#424242',
                    500: '#212121',
                    600: '#000000',
                },
            },
            fontSize: {
                12: pxToRem(12),
                13: pxToRem(13),
                14: pxToRem(14),
                15: pxToRem(15),
                16: pxToRem(16),
                18: pxToRem(18),
                20: pxToRem(20),
                22: pxToRem(22),
                24: pxToRem(24),
                28: pxToRem(28),
                32: pxToRem(32),
                36: pxToRem(36),
                40: pxToRem(40),
                48: pxToRem(48),
                54: pxToRem(54),
                56: pxToRem(56),
                64: pxToRem(64),
            },
            lineHeight: {
                100: '100%',
                110: '110%',
                120: '120%',
                125: '125%',
                130: '130%',
                140: '140%',
                150: '150%',
                160: '160%',
            },
            letterSpacing: {
                0.02: '0.02em',
                0.04: '0.04em'
            },
        }
    },
    variants: {
        extend: {
            backgroundColor: ["odd", "even"],
            margin: ["last"],
            padding: ["last, first"]
        }
    },
    plugins: []
};