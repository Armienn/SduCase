using Case.Models;

namespace Case.Services;

public class TestStudentService : IStudentService {
	private Dictionary<string, Student> _students = new()
	{
		{ "1", new Student { Id = "1", Name = "Jens Jensen", Cpr = "121212-0123", Email = "jens@mail.dk", Campus = "Odense", Courses = [new() { Title = "Matematik", Grade = "7" }, new() { Title = "Programmering", Grade = "10" }, new() { Title = "Idræt", Grade = "4" }] } },
		{ "2", new Student { Id = "2", Name = "Peter Petersen", Cpr = "030303-0123", Email = "peter@mail.dk", Campus = "Esbjerg", Courses = [new() { Title = "Fysik", Grade = "10" }, new() { Title = "Programmering", Grade = "10" }, new() { Title = "Idræt", Grade = "4" }] } },
		{ "3", new Student { Id = "3", Name = "Lise Larsen", Cpr = "040404-0123", Email = "lise@mail.dk", Campus = "Sønderborg", Courses = [new() { Title = "Engelsk", Grade = "12" }, new() { Title = "Programmering", Grade = "10" }, new() { Title = "Idræt", Grade = "4" }] } },
		{ "4", new Student { Id = "4", Name = "Morten Madsen", Cpr = "050505-0123", Email = "morten@mail.dk", Campus = "Kolding", Courses = [new() { Title = "Historie", Grade = "10" }, new() { Title = "Programmering", Grade = "10" }, new() { Title = "Idræt", Grade = "4" }] } },
		{ "5", new Student { Id = "5", Name = "Anne Andersen", Cpr = "060606-0123", Email = "anne@mail.dk", Campus = "Vejle", Courses = [new() { Title = "Biologi", Grade = "4" }, new() { Title = "Programmering", Grade = "10" }, new() { Title = "Idræt", Grade = "4" }] } }
	};

	public async Task<Student[]> GetAll() {
		return _students.Values.ToArray();
	}

	public async Task<Student?> Get(string id) {
		return _students.GetValueOrDefault(id);
	}

	public async Task<Student> Add(Student student) {
		var newId = (_students.Count() + 1).ToString();
		student.Id = newId;
		_students.Add(newId, student);
		return student;
	}

	public async Task<Student?> Update(Student student) {
		if (!_students.ContainsKey(student.Id))
			return null;
		_students[student.Id] = student;
		return student;
	}

	public async Task Delete(string id) {
		if (_students.ContainsKey(id))
			_students.Remove(id);
	}
}
