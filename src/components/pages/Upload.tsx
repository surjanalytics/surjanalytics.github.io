import Page from "src/components/modules/Page";

const Upload = () => {
  return (
    <Page documentTitle="Upload" title="Submit businesses for processing">
      <iframe
        title="Upload Form"
        src="https://docs.google.com/forms/d/e/1FAIpQLScKPdalj7vW3US1mx6SW5qWSO9iHvmEyB56avUK3oB_oXXb7Q/viewform?embedded=true"
        height="1200"
        width="100%"
        style={{
          border: "none",
          outline: "none",
          flexGrow: 1,
        }}
      >
        Loading…
      </iframe>
    </Page>
  );
};

export default Upload;
