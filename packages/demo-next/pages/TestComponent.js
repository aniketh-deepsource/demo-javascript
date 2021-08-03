import Head from "next/head";

<!-- next-google-font-display -->
export default Test = () => {
  return (
    <Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Krona+One"
        rel="stylesheet"
      />
    </Head>
  );
};


<!-- next-google-font-preconnect -->
export const TestTwo = () => (
  <div>
    <link href="https://fonts.gstatic.com" />
  </div>
);
