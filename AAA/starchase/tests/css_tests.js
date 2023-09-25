    // CSS styles are correctly linked
    function test_css_styles() {
        // Check if the CSS styles are correctly linked
        const link = document.querySelector('link[href="styles.css"]');
    
        // Assert that the link element is not null
        assert.notEqual(link, null, "CSS styles are not correctly linked");
    }