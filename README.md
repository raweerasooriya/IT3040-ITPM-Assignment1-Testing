# SwiftTranslator Test Automation Suite

This project contains automated tests for the SwiftTranslator Singlish to Sinhala conversion system using Playwright. It is developed for the IT3040 - ITPM Assignment 1.

## Project Overview

This test suite validates the accuracy, robustness, and usability of the SwiftTranslator web application by executing a total of **43 test scenarios**:

- **28 Positive Functional Scenarios**: Verifying correct transliteration across various sentence structures.
- **13 Negative Functional Scenarios**: Testing system behavior under invalid formatting and edge cases.
- **2 UI-Related Scenarios**: Validating interface behavior (1 Positive & 1 Negative).

## Prerequisites

Before running the tests, ensure you have the following installed:
- Node.js (version 16 or higher)
- npm (comes with Node.js)

## Installation

### Step 1: Clone or Download the Repository

If you have the project as a zip file, extract it. If it's a Git repository:

```bash
git clone <repository-url>
cd <project-directory>
Step 2: Install Dependencies
Run the following command in the project root directory:

Bash
npm install
Step 3: Install Playwright Browsers
After installing dependencies, install the required browsers:

Bash
npx playwright install chromium
Project Structure
.
├── swift-translator-tests.spec.js    # Main test file containing all 43 scenarios
├── playwright.config.js              # Playwright configuration
├── package.json                      # Project dependencies
└── README.md                         # This file
Running the Tests
Run All Tests
Bash
npm test
Run Tests in Headed Mode (visible browser)
Bash
npm run test:headed
Run Tests with UI Mode (interactive)
Bash
npm run test:ui
Run Tests in Debug Mode
Bash
npm run test:debug
View Test Report
After running tests, view the HTML report:

Bash
npm run report
Test Coverage
Positive Functional Tests (28 scenarios)
The test suite covers a wide range of linguistic patterns including:

Sentence Structures: Simple, compound, and complex sentences

Question Forms: Various interrogative patterns

Command Forms: Direct and polite imperatives

Tense Variations: Past, present, and future tenses

Negations: Different negative sentence forms

Greetings & Responses: Common conversational patterns

Mixed Language: English terms embedded in Singlish

Punctuation: Special characters and formatting

Numbers & Currency: Numerical formats and currency

Long Paragraphs: Validating stability with inputs >300 characters

Negative Functional Tests (13 scenarios)
Tests for system robustness and error handling including:

Spacing Issues: Missing spaces (concatenated words) and multiple consecutive spaces

Formatting: Line breaks and paragraph-style inputs

Invalid Inputs: Mixed alphanumeric strings without spaces

Language handling: Complex mixed-language scenarios (English/Singlish hybrids)

Edge Cases: Extremely short or long invalid strings

UI Tests (2 scenarios)
Positive UI Scenario: Validates that the Sinhala output updates in real-time as the user types (Usability flow).

Negative UI Scenario: Validates system behavior when clearing inputs or handling rapid UI interactions.

Test Data Structure
Each test case in the script includes:

Test Case ID: Unique identifier (e.g., Pos_Fun_001, Neg_Fun_001, Pos_UI_001)

Name: Descriptive test name

Input: Singlish text to translate

Expected Output: Expected Sinhala translation

Category: Test category (e.g., Daily language usage)

Grammar: Grammar focus (e.g., Simple sentence)

Length: Input length type (S/M/L)

Configuration
Test timeouts and settings can be modified in playwright.config.js:

Default timeout: 60 seconds

Expect timeout: 10 seconds

Retries: 0 (can be increased for flaky tests)

Workers: 1 (sequential execution to ensure stability)

Troubleshooting
Tests Failing
Network Issues: Ensure stable internet connection as the tool is web-based.

Site Changes: If the SwiftTranslator DOM structure changes, selectors may need updating.

Timeout Errors: Increase timeout values in config if the network is slow.

Installation Issues
Node.js Version: Ensure you're using Node.js 16+

Bash
node --version
Clear Cache: If having npm issues

Bash
npm cache clean --force
npm install
Browser Issues
If Playwright browsers aren't working:

Bash
npx playwright install --force chromium
Test Results
Test results are saved in the test-results/ directory:

HTML report: test-results/html-report/

JSON results: test-results/test-results.json

Screenshots/Videos: test-results/artifacts/ (Captured on failure)

License
This project is for educational purposes as part of IT3040 - ITPM assignment.

Author
Student Name: WEERASOORIYA R A Registration Number: IT23168190 BSc (Hons) in Information Technology - Year 3 semester 1