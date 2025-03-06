using Case.Models;

namespace Case.Services;

public class StudentService {
	public async Task<Student[]> GetAll() {
		return [
			new Student {
				Id = 1,
				Cpr = "123456-7890",
				Name = "Jens Jensen",
				Email = "jens@mail.dk",
				Campus = "Næstved",
				Courses = [new() { Title = "Mat", Grade = "7" }],
			}
		];
	}

	public async Task<Student> Get(int id) {
		return new Student {
			Id = 1,
			Cpr = "123456-7890",
			Name = "Jens Jensen",
			Email = "jens@mail.dk",
			Campus = "Næstved",
			Courses = [new() { Title = "Mat", Grade = "7" }],
		};
	}

	public async Task<Student> Add(Student student) {
		return new Student {
			Id = 1,
			Cpr = "123456-7890",
			Name = "Jens Jensen",
			Email = "jens@mail.dk",
			Campus = "Næstved",
			Courses = [new() { Title = "Mat", Grade = "7" }],
		};
		// todo
	}

	public async Task<Student> Update(Student student) {
		return new Student {
			Id = 1,
			Cpr = "123456-7890",
			Name = "Jens Jensen",
			Email = "jens@mail.dk",
			Campus = "Næstved",
			Courses = [new() { Title = "Mat", Grade = "7" }],
		};
		// todo
	}

	public async Task Delete(int id) {
		// todo
	}
}
