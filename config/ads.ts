/**
 * Adsterra ad codes for this site — the single source of truth.
 *
 * These are the exact GET CODE snippets issued for this website. Do not reuse
 * keys from other sites and do not modify key / src / container values.
 */

const NATIVE_CONTAINER_ID = "efa1081af2da51e741a33b62b0d5ce27";

export const adsterra = {
  desktopBanner: {
    key: "3f7b7564d12c16c8200c6c5bcd9cbace",
    format: "iframe",
    height: 90,
    width: 728,
    params: {},
    invokeSrc: "https://www.highrevenueformat.com/3f7b7564d12c16c8200c6c5bcd9cbace/invoke.js",
  },
  mobileBanner: {
    key: "129fe41b7e5276044d2dd85a012d988d",
    format: "iframe",
    height: 50,
    width: 320,
    params: {},
    invokeSrc: "https://www.highrevenueformat.com/129fe41b7e5276044d2dd85a012d988d/invoke.js",
  },
  native: {
    invokeSrc: "https://pl31478993.profitableratecpmnetwork.com/efa1081af2da51e741a33b62b0d5ce27/invoke.js",
    containerId: `container-${NATIVE_CONTAINER_ID}`,
  },
  socialBar: {
    invokeSrc: "https://pl31478992.profitableratecpmnetwork.com/fc/33/b6/fc33b6c9cad9cc4de6d8c08a10bb0fc5.js",
  },
} as const;
