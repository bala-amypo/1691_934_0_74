@RestController
public class StudentController {
@Autowired
StudentService studentService;
@PostMapping("/PostStudent")
public Student postStd (@RequestBody Student st) (
return studentService.insertStudent(st);

}
24 @GetMapping("/getAll")
25 public List<Student> getAll(){
26 return studentService.getAllStudents();
27
}
28 @GetMapping("/get/{id}")
29 public Optional<Student> get (@PathVariable Long id) {
30 return studentService.getOneStudent(id);
31
}
32 @PutMapping("/update/{id}")
33 public String update (@PathVariable Long id, @RequestBody Student
34 newStudent) {
35 Optional<Student> student-studentService.getOneStudent(id);
36 if(student.isPresent()) {