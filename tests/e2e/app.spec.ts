import { expect, test } from "@playwright/test";

test.describe("App Navigation", () => {
  test("homepage loads correctly", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/VibeCode/);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });

  test("can navigate to about page", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "About" }).click();
    await expect(page).toHaveURL("/about");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });

  test("can navigate to demo page", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Demo" }).click();
    await expect(page).toHaveURL("/demo");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });
});

test.describe("Contact Form", () => {
  test("can fill and submit contact form", async ({ page }) => {
    await page.goto("/demo");

    // Fill out the form
    await page.getByLabel("Name").fill("John Doe");
    await page.getByLabel("Email").fill("john@example.com");
    await page.getByLabel("Subject").fill("Test Subject");
    await page
      .getByLabel("Message")
      .fill("This is a test message that is longer than 10 characters.");

    // Submit the form
    await page.getByRole("button", { name: "Send Message" }).click();

    // Check for loading state
    await expect(page.getByText("Sending...")).toBeVisible();

    // Wait for success message
    await expect(page.getByText("Message sent successfully!")).toBeVisible();

    // Check that form is reset
    await expect(page.getByLabel("Name")).toHaveValue("");
    await expect(page.getByLabel("Email")).toHaveValue("");
    await expect(page.getByLabel("Subject")).toHaveValue("");
    await expect(page.getByLabel("Message")).toHaveValue("");
  });

  test("shows validation errors for empty form", async ({ page }) => {
    await page.goto("/demo");

    // Try to submit empty form
    await page.getByRole("button", { name: "Send Message" }).click();

    // Check for validation errors
    await expect(page.getByText("Name is required")).toBeVisible();
    await expect(page.getByText("Invalid email address")).toBeVisible();
    await expect(page.getByText("Subject is required")).toBeVisible();
    await expect(
      page.getByText("Message must be at least 10 characters"),
    ).toBeVisible();
  });
});

test.describe("Responsive Design", () => {
  test("mobile navigation works", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto("/");

    // Check that navigation is responsive
    await expect(page.getByRole("navigation")).toBeVisible();
  });
});

test.describe("Accessibility", () => {
  test("has proper heading structure", async ({ page }) => {
    await page.goto("/");

    // Check that there's a main heading
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });

  test("form has proper labels", async ({ page }) => {
    await page.goto("/demo");

    // Check that all form inputs have labels
    await expect(page.getByLabel("Name")).toBeVisible();
    await expect(page.getByLabel("Email")).toBeVisible();
    await expect(page.getByLabel("Subject")).toBeVisible();
    await expect(page.getByLabel("Message")).toBeVisible();
  });
});
