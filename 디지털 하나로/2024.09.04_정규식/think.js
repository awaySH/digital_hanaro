const regexp = /senior|coding/gi;
if (regexp.test("Senior JS")) console.log("5OK");
if (regexp.test("Junior Developer")) console.log("1OK");
if (regexp.test("Senior Developer")) console.log("2OK");
if (regexp.test("JS Coding")) console.log("3OK");
if (regexp.test("JavaScript Coding")) console.log("4OK");
if (regexp.test("JavaScript Coding")) console.log("6OK");
