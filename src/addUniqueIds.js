export default function addUniqueIds(obj) {
    Object.keys(obj).forEach((bundle) => {
        // Generate and add bundle id
        const bundleId = Math.random().toString(16).slice(2);
        obj[bundle].id = bundleId;

        // Loop through items in bundle
        obj[bundle].items.forEach((item)=> {
        // Generate and add item id
            const itemId = Math.random().toString(16).slice(2);
            item.id = itemId;
        })
    });

    // Finally log it to copy + paste in bundles.json
    console.log(obj);
}    