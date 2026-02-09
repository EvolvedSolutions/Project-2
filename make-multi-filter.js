'use strict';
// Enables strict mode to prevent common JavaScript errors
function MakeMultiFilter(originalArray) {
    // Returns a function that filters an array cumulatively
    const arrayFilterer = function (filterCriteria = undefined, callback = undefined){
    arrayFilterer.currentArray ??= originalArray;
    // Ensure the input is an array
    if (Array.isArray(originalArray)) {
            // Apply filter if a function is provided
            if ((typeof filterCriteria === "function")) {
                arrayFilterer.currentArray =
                    arrayFilterer.currentArray.filter(e => filterCriteria(e));
            } else {
                // Return current array when no filter is given
                return arrayFilterer.currentArray;
            }
        }
        // Execute callback with originalArray as `this`
        if (typeof callback === 'function'){
            callback.call(originalArray, arrayFilterer.currentArray);
        }
        // Return function to allow chaining
        return arrayFilterer;
    };
    // Return the filter function
    return arrayFilterer;
}  
