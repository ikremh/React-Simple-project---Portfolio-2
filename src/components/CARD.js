import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function CardExample() {
  const projects = [
    {
      title: "To Do List Project",
      description: "هذا مشروع بسيط لقائمة المهام حيث يمكنك إضافة مهام جديدة، حذف المهام المكتملة، وتحديث حالة المهام.",
      video: process.env.PUBLIC_URL + "/videos/to do list.mp4",
      link: process.env.PUBLIC_URL + "/js to do list/task.html"
    },
    {
      title: "Store Project",
      description: "هذا مشروع بسيط لمتجر إلكتروني حيث يمكنك تصفح المنتجات، إضافتها إلى السلة، وإتمام عملية الشراء من خلال إرسال الطلب إلى قسم المبيعات على الواتس اب.",
      video: process.env.PUBLIC_URL + "/videos/main.mp4",
      link: process.env.PUBLIC_URL + "/progect4/storemain.html"
    },
    {
      title: "Warehouse System",
      description: "هذا مشروع لنظام إدارة المخازن حيث يمكنك تتبع المخزون، إضافة منتجات جديدة، وتحديث حالة المنتجات. يساعد في عمليات الجرد بشكل كبير ويدعم إضافة عدد لا نهائي من المنتجات.",
      video: process.env.PUBLIC_URL + "/videos/storeg.mp4",
      link: process.env.PUBLIC_URL + "/storeg/data.html"
    }
  ];

  return (
    <section style={{ backgroundColor: "#111", padding: "50px 0" }}>
      <div className="container">
        <div className="row g-4 justify-content-center">
          {projects.map((project, i) => (
            <div key={i} className="col-12 col-md-6 col-lg-4">
              <Card style={{ borderRadius: '15px', backgroundColor: '#1c1c1c', color: '#fff', boxShadow: '0 4px 15px rgba(8, 207, 68, 0.87)' }}>
                <video
                  src={project.video}
                  controls
                  autoPlay
                  loop
                  muted
                  style={{ width: '100%', borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }}
                />
                <Card.Body>
                  <Card.Title style={{ color: '#28a745' }}>{project.title}</Card.Title>
                  <Card.Text style={{ color: '#fff' }}>{project.description}</Card.Text>
                  <Button variant="success" href={project.link}> للاطلاع على المشروع</Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CardExample;
