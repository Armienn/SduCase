using Case.Models;

namespace Case.Services;

public interface IStudentService {
	Task<Student[]> GetAll();
	Task<Student?> Get(string id);
	Task<Student> Add(Student student);
	Task<Student?> Update(Student student);
	Task Delete(string id);
}
