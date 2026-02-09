class TemplateProcessor {
    // Constructor stores the template string that will be processed
    constructor(template) {
    this.template  = template ;
  }
  // fillIn replaces all placeholders in the template with values
  // from the provided dictionary object.
  fillIn(dictionary){
        // Start with the original template
        let returnString = this.template;
        // Loop through each property in the dictionary
        for (const property in dictionary){
            // Ensure the property belongs directly to the dictionary
            if (Object.hasOwn(dictionary, property)) {
                // Replace all instances of {{property}} with its value
                returnString = returnString.replaceAll("{{" + property + "}}",dictionary[property]);
            }
        }
        return returnString.replaceAll(/{{.*}}/g, "");
    }
}
