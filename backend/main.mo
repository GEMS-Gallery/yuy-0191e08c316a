import Text "mo:base/Text";

actor {
  stable let message : Text = "I am a phishing canister, just kidding";

  public query func getMessage() : async Text {
    message
  };
}