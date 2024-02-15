import { useRouter } from 'next/router';
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs';
import { NavCTA, TocCTA } from './components/cta';
import Footer from './components/footer';
import { Logo } from './components/logo';

// #3F3D53
// #F3F1FF
const logo = (
  <svg
    height="30"
    viewBox="0 0 473 129"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M156.323 67.2372C155.771 77.5631 152.673 87.8613 147.397 96.7616C138.56 111.672 123.755 123.318 104.936 126.849C95.5409 128.536 88.7081 128.322 81.0342 127.145C75.4984 125.912 72.0133 121.415 75.7302 116.07C80.2848 109.518 86.7402 105.213 93.1836 100.907C111.978 88.3476 131.942 77.8497 152.09 67.6769C154.343 66.5412 156.481 64.2944 156.323 67.2372Z"
      fill="#A13974"
    />
    <path
      d="M169.694 43.1434C174.427 39.3991 179 34.589 182.239 29.4357L182.244 29.4319L182.249 29.428C185.814 23.753 183.79 18.6293 177.26 17.0761C169.752 15.2893 163.386 16.0089 155.702 17.0761C153.83 17.3361 153.354 17.7392 152.713 18.1434C151.417 18.962 151.274 21.461 153.14 21.7721C156.557 21.9856 167.747 21.2212 170.43 22.4124C178.076 25.8071 157.153 37.1094 154.403 39.2974C152.754 40.6079 151.963 40.4505 151.036 38.3872C143.759 22.2096 131.909 10.7385 115.35 4.22533C104.971 0.144998 94.2793 -0.789116 83.2332 0.606922C77.2806 1.35893 72.6108 2.99382 67.1419 5.12434C65.3384 5.82691 62.9525 7.0237 61.2933 7.97718C57.4042 10.2078 53.8247 12.7097 50.5669 15.4969C47.7294 17.9245 49.396 22.2704 53.1141 22.6195L121.571 29.0465C124.609 29.3316 126.11 32.88 124.2 35.2587L86.0185 84.0794C84.6298 85.8084 86.403 88.6596 88.462 87.8355C103.995 81.6016 119.096 74.0364 134.047 66.5187C146.515 60.2493 158.778 51.7777 169.694 43.1434Z"
      fill="#FB5B62"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M98.5791 47.3169C101.016 44.706 98.8693 40.4751 95.323 40.8998L33.3125 48.3264C31.4368 48.551 29.876 49.9028 29.4974 51.7535C27.1126 63.4103 28.064 75.1499 32.5509 86.9003C34.2311 91.3023 34.3364 91.4291 29.8007 91.9868C29.2093 92.0594 28.6167 92.1398 28.0231 92.2202C24.6035 92.6838 21.1517 93.1517 17.7111 92.175C9.39414 89.8058 22.1859 81.9275 23.1518 78.5611C23.865 76.0752 20.4861 75.1441 18.3735 76.6361C11.604 81.4168 5.15918 86.9958 1.16277 94.3733C0.308766 96.0814 0.414398 98.2165 0.735706 99.3713C3.10202 107.874 21.4225 106.33 27.4584 105.246C35.3675 103.826 41.0781 103.311 48.7624 100.963C50.8581 100.322 50.8969 100.109 54.0987 96.8099C70.321 81.752 85.1666 61.2215 98.5791 47.3169Z"
      fill="#EFA16D"
    />
    <path
      d="M215.477 93.194C222.603 93.194 228.849 89.8311 231.731 84.5466V92.3933H236.455V50.1168H231.731V58.0437C228.849 52.7591 222.603 49.3162 215.477 49.3162C203.867 49.3162 194.579 58.444 194.579 71.3352C194.579 84.0661 203.867 93.194 215.477 93.194ZM199.783 71.3352C199.783 61.4066 206.669 54.2004 216.037 54.2004C224.605 54.2004 231.811 60.2056 231.811 71.3352C231.811 82.3847 224.605 88.3098 216.037 88.3098C206.669 88.3098 199.783 81.1837 199.783 71.3352Z"
      fill="currentColor"
    />
    <path
      d="M277.91 75.6589V50.1168H272.786V75.4987C272.786 83.8259 269.023 88.3098 261.976 88.3098C255.01 88.3098 251.167 83.8259 251.167 75.4987V50.1168H246.043V75.6589C246.043 86.7084 251.968 93.194 261.976 93.194C272.065 93.194 277.91 86.7084 277.91 75.6589Z"
      fill="currentColor"
    />
    <path
      d="M289.298 92.3933H294.423V54.921H299.947V50.1168H294.423V36.0247L289.298 38.1865V50.1168H284.094V54.921H289.298V92.3933Z"
      fill="currentColor"
    />
    <path
      d="M306.5 92.3933H311.624V67.0114C311.624 58.6842 315.388 54.2004 322.514 54.2004C329.48 54.2004 333.243 58.6842 333.243 67.0114V92.3933H338.367V66.7712C338.367 55.7217 332.843 49.3162 323.475 49.3162C317.95 49.3162 313.866 51.5581 311.544 55.4014C311.624 53.2395 311.624 51.0777 311.624 48.6756V30.7401H306.5V92.3933Z"
      fill="currentColor"
    />
    <path
      d="M343.819 92.3933H377.608L379.21 81.0235H362.315L378.969 51.5581V49.9567H346.621L345.02 61.3265H360.473L343.819 90.7919V92.3933Z"
      fill="currentColor"
    />
    <path
      d="M403.992 93.4342C412.399 93.4342 419.125 89.9112 423.849 83.6658L415.682 76.8599C412.56 80.7833 408.716 82.705 404.232 82.705C398.627 82.705 394.544 79.6623 393.343 74.618H423.849C425.611 56.8426 414.962 48.9158 403.352 48.9158C391.021 48.9158 381.413 57.9636 381.413 71.3352C381.413 84.3063 390.46 93.4342 403.992 93.4342ZM393.503 65.8905C394.864 61.8069 398.467 59.1647 403.271 59.1647C407.996 59.1647 411.198 61.5667 412.159 65.8905H393.503Z"
      fill="currentColor"
    />
    <path
      d="M448.96 93.194C453.684 93.194 458.328 91.5926 461.21 88.55L461.29 92.3933H472.5V30.4999H459.849V42.5904C459.849 46.1134 459.929 49.4763 460.089 52.7591C457.127 50.3571 453.123 49.156 448.96 49.156C437.51 49.156 427.821 58.1238 427.821 71.175C427.821 84.2263 437.51 93.194 448.96 93.194ZM440.472 71.175C440.472 64.7695 444.796 60.686 450.641 60.686C456.406 60.686 460.65 64.7695 460.65 71.175C460.65 77.5805 456.406 81.6641 450.641 81.6641C444.796 81.6641 440.472 77.5805 440.472 71.175Z"
      fill="currentColor"
    />
    <style jsx>{`
      svg {
        mask-image: linear-gradient(
          60deg,
          black 25%,
          rgba(0, 0, 0, 0.2) 50%,
          black 75%
        );
        mask-size: 400%;
        mask-position: 0%;
      }
      svg:hover {
        mask-position: 100%;
        transition: mask-position 1s ease, -webkit-mask-position 1s ease;
      }
    `}</style>
  </svg>
);

const config: DocsThemeConfig = {
  logo: Logo,
  logoLink: 'https://authzed.com',
  project: { link: 'https://github.com/authzed/spicedb' },
  useNextSeoProps() {
    const { asPath } = useRouter();
    const { title, frontMatter } = useConfig();
    const desc =
      frontMatter.description ||
      'Welcome to the SpiceDB and AuthZed docs site.';

    const defaultConfig = {
      defaultTitle: 'AuthZed Docs',
      titleTemplate: '%s – AuthZed Docs',
      description: desc,
      canonical: `https://authzed.com/docs${asPath}`, // NOTE: Update this if the base dir ever changes
      openGraph: {
        title,
        description: desc,
      },
    };

    return defaultConfig;
  },
  darkMode: true,
  primaryHue: { dark: 25, light: 290 },
  primarySaturation: { dark: 100, light: 100 },
  chat: { link: 'https://discord.gg/spicedb' },
  docsRepositoryBase: 'https://github.com/authzed/docs',
  banner: {
    dismissible: true,
    text: (
      <a href="https://authzed.com/zanzibar">
        Have you read Google's Zanzibar paper? We annotated it additional
        context and comparisons with SpiceDB ↗
      </a>
    ),
  },
  navbar: {
    extraContent: <NavCTA />,
  },
  sidebar: {
    toggleButton: true,
    defaultMenuCollapseLevel: 2,
  },
  feedback: {
    content: (
      <span>
        Something unclear?
        <br />
        Create an issue →
      </span>
    ),
  },
  editLink: { text: null },
  toc: { backToTop: true, extraContent: <TocCTA /> },
  footer: {
    component: <Footer />,
  },
};

export default config;
