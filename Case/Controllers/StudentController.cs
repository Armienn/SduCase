using Case.Models;
using Case.Services;
using Microsoft.AspNetCore.Mvc;

namespace Case.Controllers {
	public class StudentController : Controller {
		private readonly ILogger<StudentController> _logger;
		private readonly IStudentService _studentService;

		public StudentController(
			ILogger<StudentController> logger,
			IStudentService studentService
		) {
			_logger = logger;
			_studentService = studentService;
		}

		public async Task<IActionResult> GetAll() {
			return Json(await _studentService.GetAll());
		}

		public async Task<IActionResult> Get(int id) {
			return Json(await _studentService.Get(id));
		}

		[HttpPost]
		public async Task<IActionResult> Add([FromBody] Student model) {
			var newModel = await _studentService.Add(model);
			return Json(newModel);
		}

		[HttpPut]
		public async Task<IActionResult> Update([FromBody] Student model) {
			var newModel = await _studentService.Update(model);
			return Json(newModel);
		}

		[HttpDelete]
		public async Task<IActionResult> Delete(int id) {
			await _studentService.Delete(id);
			return Json("success");
		}
	}
}
