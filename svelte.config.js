import adapter from "@sveltejs/adapter-node"
import preprocess from "svelte-preprocess"

/** @type {import("@sveltejs/kit").Config} */
const config = {
  preprocess: [preprocess()],
  kit: {
    browser: {
      hydrate: false,
      router: false,
    },
    adapter: adapter()
  },
}

export default config
