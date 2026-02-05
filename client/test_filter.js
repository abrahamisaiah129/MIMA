
const DEFAULT_SIZES = ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46"];

function getInitialSize(productSizes, preSelectedSize) {
    const sizesToDisplay = productSizes.includes("ALL") ? DEFAULT_SIZES : productSizes;

    const initialSize = (preSelectedSize && sizesToDisplay.includes(preSelectedSize))
        ? preSelectedSize
        : sizesToDisplay[0];

    return initialSize;
}

// Case 1: Product has ALL sizes, User filters by 42
console.log("Case 1 (ALL, 42):", getInitialSize(["ALL"], "42")); // Should be "42"

// Case 2: Product has specific sizes [38, 39], User filters by 42 (Should not happen in UI due to filter, but robust check)
console.log("Case 2 ([38, 39], 42):", getInitialSize(["38", "39"], "42")); // Should be "38" (default)

// Case 3: Product has specific sizes [40, 42], User filters by 42
console.log("Case 3 ([40, 42], 42):", getInitialSize(["40", "42"], "42")); // Should be "42"

// Case 4: No filter (preSelectedSize is null), Product has ALL
console.log("Case 4 (ALL, null):", getInitialSize(["ALL"], null)); // Should be "36" (default)
