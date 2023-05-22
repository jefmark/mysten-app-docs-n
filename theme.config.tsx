import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  primaryHue: 338,
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    </>
  ),
  logo: (
    <svg xmlns="http://www.w3.org/2000/svg" width={180} height={22} fill="none">
      <g fill="currentColor" clipPath="url(#a)">
        <path d="M63.906 11.27h-.197L59.089 0h-4.373v16.774h3.44V5.815h.14l4.34 10.877h2.343l4.34-10.836h.139v10.918h3.44V0h-4.373l-4.62 11.27ZM80.238 13.432h-.131l-2.605-9.239h-3.669l4.513 12.941-.204.532c-.154.393-.353.671-.598.836a1.4 1.4 0 0 1-.86.229 4.295 4.295 0 0 1-1.106-.205l-.786 2.605c.251.104.569.188.95.254.388.07.803.106 1.245.106.863 0 1.6-.14 2.212-.418a3.927 3.927 0 0 0 1.516-1.172 5.844 5.844 0 0 0 .958-1.77l4.89-13.94h-3.695l-2.629 9.24v.001ZM97.276 10.68c-.6-.557-1.512-.962-2.735-1.212l-2.277-.459c-.585-.126-.997-.292-1.236-.5a.968.968 0 0 1-.36-.761c0-.377.185-.677.557-.902.37-.228.826-.343 1.367-.343.404 0 .751.068 1.04.204.295.132.532.31.713.533.18.217.298.464.353.736l3.194-.197c-.154-1.157-.688-2.072-1.606-2.743-.912-.672-2.162-1.008-3.75-1.008-1.077 0-2.015.159-2.818.475-.797.317-1.417.768-1.86 1.352-.436.584-.654 1.28-.654 2.089 0 .939.298 1.71.893 2.317.6.607 1.515 1.033 2.743 1.278l2.18.435c.546.11.95.267 1.211.475a.96.96 0 0 1 .401.779c-.006.376-.196.685-.574.925-.37.234-.863.352-1.475.352-.612 0-1.133-.131-1.531-.393-.399-.267-.65-.654-.754-1.162l-3.431.18c.17 1.201.745 2.152 1.728 2.85.988.693 2.314 1.04 3.98 1.04 1.092 0 2.056-.171 2.891-.515.841-.35 1.503-.836 1.982-1.459.486-.622.73-1.345.73-2.17 0-.906-.3-1.638-.902-2.195v-.001ZM105.448 14.096a3 3 0 0 1-.492.04c-.234 0-.442-.035-.622-.106a.81.81 0 0 1-.409-.369c-.099-.18-.148-.431-.148-.753V6.815h2.367V4.193h-2.367V1.18h-3.49v3.014h-1.72v2.622h1.72v6.552c-.005.824.167 1.506.516 2.047.349.541.838.94 1.466 1.196.634.256 1.371.369 2.212.336a5.908 5.908 0 0 0 1.155-.14c.316-.07.563-.133.737-.188l-.549-2.595c-.087.016-.212.04-.376.073ZM117.154 5.62a5.142 5.142 0 0 0-1.883-1.189 6.572 6.572 0 0 0-2.318-.402c-1.234 0-2.309.273-3.227.82a5.557 5.557 0 0 0-2.12 2.284c-.503.978-.754 2.114-.754 3.408s.251 2.476.754 3.448a5.38 5.38 0 0 0 2.146 2.244c.934.525 2.047.786 3.341.786 1.038 0 1.953-.158 2.744-.475.797-.322 1.447-.77 1.949-1.343a4.398 4.398 0 0 0 1.007-2.031l-3.226-.214a2.139 2.139 0 0 1-.525.803c-.23.218-.505.382-.828.491a3.28 3.28 0 0 1-1.064.165c-.584 0-1.089-.123-1.515-.37a2.51 2.51 0 0 1-.991-1.048c-.229-.454-.344-.991-.344-1.614v-.009h8.567v-.958c0-1.07-.15-2.004-.45-2.8-.3-.803-.721-1.47-1.262-2l-.001.003Zm-6.851 3.595c.021-.451.136-.864.349-1.237.228-.41.546-.735.95-.975a2.69 2.69 0 0 1 1.409-.369c.53 0 .953.112 1.335.336.387.218.691.521.909.909.219.388.327.833.327 1.335h-5.279ZM129.762 4.603c-.649-.382-1.411-.574-2.285-.574-.934 0-1.728.216-2.383.647a3.51 3.51 0 0 0-1.401 1.737h-.148v-2.22h-3.325v12.581h3.49V9.501c.005-.541.106-1.002.303-1.384a2.12 2.12 0 0 1 .835-.885c.36-.203.775-.303 1.245-.303.699 0 1.247.218 1.646.654.398.432.595 1.033.59 1.803v7.387h3.489v-8.01c0-.977-.18-1.818-.54-2.522a3.902 3.902 0 0 0-1.516-1.638ZM136.013 0h-1.532v16.774h9.525v-1.376h-7.993V0ZM153.683 4.865a4.271 4.271 0 0 0-1.459-.655 6.348 6.348 0 0 0-1.499-.188c-.639 0-1.27.093-1.892.278a4.67 4.67 0 0 0-1.687.892c-.502.41-.896.958-1.179 1.647l1.384.5c.229-.542.627-1.012 1.196-1.41.573-.399 1.312-.598 2.219-.598.956 0 1.687.249 2.195.746.514.491.77 1.166.77 2.023v.295c0 .316-.128.546-.385.687-.257.143-.631.246-1.123.311-.486.066-1.08.143-1.786.23-.709.087-1.359.21-1.949.368-.59.159-1.1.375-1.531.647a2.865 2.865 0 0 0-1 1.05c-.235.425-.353.95-.353 1.571 0 .808.187 1.496.558 2.064.371.563.87.994 1.499 1.294a4.837 4.837 0 0 0 2.08.443c.699 0 1.307-.112 1.826-.336a4.027 4.027 0 0 0 2.073-1.94h.09v1.99h1.458V8.232c0-.841-.139-1.534-.418-2.08-.278-.553-.642-.98-1.089-1.286l.002-.001Zm.049 7.085c0 .688-.155 1.318-.466 1.892a3.538 3.538 0 0 1-1.311 1.367c-.568.344-1.239.516-2.015.516-.824 0-1.51-.208-2.056-.622-.546-.42-.819-1.013-.819-1.777 0-.508.134-.923.402-1.245.267-.327.652-.584 1.155-.77.503-.186 1.108-.321 1.819-.409.261-.033.557-.071.884-.115.328-.044.655-.095.984-.155.332-.066.625-.14.876-.222.256-.082.439-.175.548-.278v1.819l-.001-.001ZM166.606 4.84c-.781-.546-1.687-.818-2.72-.818-.77 0-1.409.136-1.916.41a3.777 3.777 0 0 0-1.221.999 5.599 5.599 0 0 0-.704 1.163h-.131V0h-1.466v16.774h1.417V14.44h.18c.17.382.41.775.721 1.179.311.398.72.735 1.228 1.007.514.273 1.152.41 1.916.41 1.026 0 1.927-.273 2.703-.82.78-.546 1.387-1.307 1.818-2.284.437-.978.655-2.116.655-3.415 0-1.3-.218-2.428-.655-3.399-.437-.978-1.045-1.737-1.826-2.277h.001Zm.565 8.298c-.3.786-.74 1.411-1.318 1.875-.58.46-1.287.688-2.122.688-.836 0-1.507-.221-2.081-.664-.568-.447-1.005-1.062-1.31-1.842-.3-.786-.45-1.688-.45-2.704 0-1.016.15-1.892.45-2.661.3-.775.734-1.382 1.302-1.819.573-.442 1.269-.663 2.088-.663.819 0 1.55.228 2.129.687.579.453 1.016 1.068 1.311 1.843.3.775.45 1.647.45 2.612 0 .966-.15 1.86-.45 2.646l.001.002ZM179.205 11.278c-.523-.558-1.313-.964-2.366-1.221l-1.901-.467c-.78-.197-1.36-.46-1.736-.795-.371-.338-.557-.778-.557-1.318 0-.638.273-1.16.819-1.564.546-.405 1.245-.607 2.097-.607.567 0 1.043.09 1.425.27.387.181.702.423.941.73.241.305.426.647.558 1.023l1.334-.376c-.305-.912-.804-1.627-1.497-2.146-.689-.525-1.609-.786-2.761-.786-.846 0-1.601.15-2.261.45-.66.3-1.179.714-1.556 1.244-.376.525-.565 1.134-.565 1.827 0 .84.262 1.545.787 2.113.523.568 1.332.983 2.424 1.245l2.055.491c.689.165 1.202.42 1.54.77.339.344.508.77.508 1.278 0 .655-.29 1.201-.868 1.638-.579.431-1.352.647-2.318.647-.863 0-1.559-.19-2.089-.574-.524-.382-.876-.947-1.056-1.695l-1.401.344c.225 1.05.735 1.852 1.532 2.408.797.552 1.81.828 3.038.828.923 0 1.735-.156 2.433-.467.704-.316 1.253-.75 1.646-1.302.393-.55.59-1.182.59-1.892 0-.84-.265-1.54-.795-2.096ZM15.802 10.978C10.534 10.978 5.268 21.492 0 21.492V10.996C5.476 10.996 10.742.482 15.802.482v10.496ZM31.621 10.898c-5.268 0-10.534 10.514-15.802 10.514V10.917c5.476 0 10.742-10.514 15.802-10.514v10.495ZM43.796 15.352c0 3.347-2.723 6.06-6.083 6.06-3.36 0-6.082-2.713-6.082-6.06 0-3.347 2.723-6.06 6.082-6.06 3.36 0 6.083 2.713 6.083 6.06Z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h180v21.492H0z" />
        </clipPath>
      </defs>
    </svg>
  ),
  project: {
    link: "https://github.com/mystenlabs/sui",
  },
  chat: {
    link: "https://discord.com/invite/mysten",
  },
  docsRepositoryBase: "https://github.com/mystenlabs/mysten-app-docs",
  footer: {
    text: "© 2023 Mysten Labs. All Rights Reserved.",
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Mysten Labs Docs",
    };
  },
};

export default config;