export function waitForElementToExist (selector) {
    return new Promise( resolve => {
        const element = document.querySelector(selector)
        if (element) {
            resolve(element)
            return;
        }

        const observer = new MutationObserver( (mutations) => {
            mutations.forEach( (mutation) => {
                const nodes = Array.from(mutation.addedNodes)
                nodes.forEach( node => {
                    if (node.matches && node.matches(selector)) {
                        observer.disconnect();
                        resolve(node);
                        return;
                    }

                    if (node.querySelector) {
                        const element = node.querySelector(selector)
                        if (element) {
                            resolve(element)
                            return
                        }
                    }
                })
            })
        })

        observer.observe(document.documentElement, {childList: true, subtree: true})
    })
}