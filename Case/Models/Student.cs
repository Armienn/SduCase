namespace Case.Models;
public class Student {
	public int Id { get; set; }
	public string Cpr { get; set; }
	public string Name { get; set; }
	public string Email { get; set; }
	public string Campus { get; set; }
	public FinishedCourse[] Courses { get; set; }
}

public class FinishedCourse {
	public string Title { get; set; }
	public string Grade { get; set; }
}