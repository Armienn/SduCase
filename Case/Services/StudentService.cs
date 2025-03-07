using Case.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace Case.Services;

public class StudentService : IStudentService {
	private readonly IMongoCollection<Student> _studentCollection;

	public StudentService(
		IOptions<DatabaseConfiguration> databaseConfiguration
	) {
		var mongoClient = new MongoClient(databaseConfiguration.Value.ConnectionString);
		var mongoDatabase = mongoClient.GetDatabase(databaseConfiguration.Value.DatabaseName);
		_studentCollection = mongoDatabase.GetCollection<Student>(databaseConfiguration.Value.StudentCollection);
	}

	public async Task<Student[]> GetAll() {
		return (await _studentCollection.Find(_ => true).ToListAsync()).ToArray();
	}

	public async Task<Student?> Get(string id) {
		return await _studentCollection.Find(x => x.Id == id).FirstOrDefaultAsync();
	}

	public async Task<Student> Add(Student student) {
		await _studentCollection.InsertOneAsync(student);
		return student;
	}

	public async Task<Student?> Update(Student student) {
		await _studentCollection.ReplaceOneAsync(x => x.Id == student.Id, student);
		return student;
	}

	public async Task Delete(string id) {
		await _studentCollection.DeleteOneAsync(x => x.Id == id);
	}
}
