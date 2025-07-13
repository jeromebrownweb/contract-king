# Frontend Plan - Building from Figma Designs

## Design to Code Workflow

### 1. Design Analysis
- I will receive JPG or PNG files of Figma pages you've designed
- I'll analyze the design and use MCP Context7 to determine the best approach
- I'll apply React best practices from the documentation when building components

### 2. Planning & Approval Process
- **Explain First**: I'll provide a detailed build plan before writing any code
- **Wait for Approval**: I will only execute the plan after you give approval
- **No Surprises**: All implementation decisions will be discussed upfront

### 3. Component Reuse Strategy
- **Reuse Existing**: Always check for existing header, footer, and other built components
- **Build Similar**: If components are similar to existing ones, modify existing components rather than building from scratch
- **Component Consistency**: Maintain design system consistency across all pages

### 4. CSS Best Practices
- **Avoid Breaking Changes**: Ensure new CSS doesn't affect other pages
- **Scope Styles**: Use component-specific styling to prevent conflicts
- **Test Impact**: Check that changes don't break existing functionality

### 5. Code Efficiency
- **Minimal Code**: Write concise, clean code - avoid unnecessary complexity - use context7 documentation for best practices
- **Efficient HTML**: Use semantic HTML with minimal DOM elements
- **Optimized CSS**: Keep CSS lean and avoid redundant styles

### 6. Responsive Design
- **Mobile First**: Ensure designs work on mobile, tablet, and desktop
- **Cross-Device Testing**: Verify layouts look correct across all screen sizes
- **Responsive Components**: Build components that adapt to different viewports

### 7. Git Workflow
- **Ask Before Saving**: Always ask if you want to save to git before executing
- **Small Changes Exception**: For minor CSS tweaks, you may allow saving after execution
- **Your Decision**: You control when and how we commit changes