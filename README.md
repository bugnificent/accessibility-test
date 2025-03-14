# Accessibility Testing Results

This repository contains accessibility testing results generated using the [axe DevTools](https://www.deque.com/axe/devtools/) and [Accessibility Insight](https://accessibilityinsights.io/).

## Overview

- The JSON files in this repository represent the accessibility audit outputs for the tested application. These results help identify areas for improvement to ensure compliance with accessibility standards such as WCAG (Web Content Accessibility Guidelines).

- The HTML file shows accessibility FastPass results using Accessibility Insights from Windows. FastPass runs for most common accessibility issues like color contrast and tab stops.

## File Structure

- `accessibility-test/`: Contains the HTML report generated by axe Accessibility Insight.
- Each JSON file corresponds to a specific page or component tested.

## How to Interpret the JSON Files

Each JSON file includes detailed information about:

- **Violations**: Issues that fail accessibility checks.
- **Passes**: Elements that meet accessibility standards.
- **Incomplete**: Elements that could not be fully tested.
- **Inapplicable**: Rules that did not apply to the tested page/component.

### Key Fields in the JSON Output

- `description`: A brief description of the issue.
- `impact`: The severity level (e.g., minor, moderate, serious, critical).
- `tags`: Related WCAG guidelines and standards.
- `nodes`: A list of elements where the issue occurs, including:
  - `html`: The HTML of the affected element.
  - `target`: The selector of the affected element.
  - `failureSummary`: A summary of why the element failed the check.

## Usage

1. Clone this repository:

   ```bash
   git clone https://github.com/test-automation.git
   ```

2. Navigate to the repository:

   ```bash
   cd accessibility-test
   ```

3. Open the JSON file using a text editor or JSON viewer to review the accessibility findings.

## Tools and Resources

- [axe DevTools Documentation](https://www.deque.com/axe/devtools/documentation/)
- [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/)

## Contributing

If you would like to contribute to this repository:

1. Fork the repository.
2. Make your changes or add new accessibility testing results.
3. Submit a pull request for review.

## 📜 License
This project is licensed under the [MIT License](LICENSE)

---

For questions or suggestions, feel free to create an issue in this repository.

