import React, { useState } from "react";
import "./styles.css";
import { IntlProvider, FormattedMessage } from "react-intl";
import { messages } from "./trans/messages";

export default function App() {
  const [name, setName] = useState("");
  // Get Browser locale
  var brwoserLocale =
    (navigator.languages && navigator.languages[0]) ||
    navigator.language ||
    navigator.userLanguage ||
    "en-US";
  const [locale, setLocale] = useState(brwoserLocale);

  /* ******************* */
  const handleChange = e => {
    setName(e.target.value);
  };
  /* ******************* */
  const handleSelect = e => {
    setLocale(e.target.value);
  };
  return (
    <div className="App">
      <h1>
        <FormattedMessage id="greeting" defaultMessage={`Hello CodeSandbox`} />
      </h1>
      <select onChange={handleSelect} defaultValue={locale}>
        {Object.keys(messages).map(l => (
          <option key={l}>{l}</option>
        ))}
      </select>
      <IntlProvider locale={locale} messages={messages[locale]}>
        <input placeholder="Enter name" onChange={handleChange} />
        <p>
          <FormattedMessage id="greeting" values={{ name }} />
          <br />
          <FormattedMessage id="time" values={{ t: Date.now() }} />
          <br />
          <FormattedMessage id="date" values={{ d: Date.now() }} />
        </p>
      </IntlProvider>
    </div>
  );
}
