using MongoDB.Bson;
using MongoDB.Bson.Serialization;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson.Serialization.Serializers;

namespace Case.Models;
public class Student {
	[BsonId]
	[BsonRepresentation(BsonType.ObjectId)]
	public string? Id { get; set; }

	[BsonSerializer(typeof(CprSerializer))]
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

public class CprSerializer : SerializerBase<string> {
	public override string Deserialize(BsonDeserializationContext context, BsonDeserializationArgs args) {
		var value = context.Reader.ReadString();
		if (value.Length > 21) // hack to support cpr values from before the "encryption"
			return value.Substring(21);
		return value;
		// TODO: implement proper encryption
	}

	public override void Serialize(BsonSerializationContext context, BsonSerializationArgs args, string value) {
		context.Writer.WriteString("definitely not a cpr " + value);
		// TODO: implement proper encryption
	}
}