import { display } from '../js/main.js';

QUnit.module('display function test', function() {

    QUnit.test('Test if the display function returns the correct option', function(assert) {

        // Select the first radio button (simulate user action)
        const radioBTNS = document.getElementsByName('option');
        radioBTNS[0].checked = true;

        // This is chatGPT generated code
        let alertMessage = '';
        window.alert = (message) => {
            alertMessage = message;
        };
        ////////////////////////////////

        display();

        // Test if the alert message matches the expected result
        assert.equal(alertMessage, 'paragraphs', 'The alert message should be "paragraphs".');
    });

    QUnit.test('Test if the display function returns the correct option 2', function(assert) {

        // Select the first radio button (simulate user action)
        const radioBTNS = document.getElementsByName('option');
        radioBTNS[1].checked = true;

        // This is chatGPT generated code
        let alertMessage = '';
        window.alert = (message) => {
            alertMessage = message;
        };
        ////////////////////////////////

        display();

        // Test if the alert message matches the expected result
        assert.equal(alertMessage, 'words', 'The alert message should be "words".');
    });


    QUnit.test('Test when nothing is selected', function(assert) {

        // Make sure no radio button is checked
        const radioBTNS = document.getElementsByName('option');
        radioBTNS.forEach(button => button.checked = false);

        // This is chatGPT generated code
        let alertMessage = '';
        window.alert = (message) => {
            alertMessage = message;
        };
        ////////////////////////////////

        display();

        // Test if the alert message matches the expected default result
        assert.equal(alertMessage, 'Nothing was selected', 'The alert message should be "Nothing was selected".');
    });
});
