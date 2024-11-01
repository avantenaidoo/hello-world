using Microsoft.AspNetCore.Mvc;
using Xunit;
using HelloWorld.Controllers;

namespace HelloWorldTests
{
    public class HomeControllerTests
    {
        [Fact]
        public void Index_ReturnsAViewResult()
        {
            // Arrange
            var controller = new HomeController();

            // Act
            var result = controller.Index();

            // Assert
            Assert.IsType<ViewResult>(result);
        }
    }
}
