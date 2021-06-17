import Parchment from "parchment";

let config = {
  scope: Parchment.Scope.INLINE,
  whitelist: ["nowrap", "initial"],
};

let WhiteSpaceAttribute = new Parchment.Attributor.Attribute(
  "whitespace",
  "whitespace",
  config
);
let WhiteSpaceClass = new Parchment.Attributor.Class(
  "whitespace",
  "ql-whitespace",
  config
);
let WhiteSpaceStyle = new Parchment.Attributor.Style(
  "whitespace",
  "white-space",
  config
);

export { WhiteSpaceAttribute, WhiteSpaceClass, WhiteSpaceStyle };
