import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';

function CardExample() {
  return (
    
    <div className="d-flex justify-content-around">

     <Card style={{ width: '25rem'  }}>
  <video
    src="/videos/to do list.mp4"
    controls
    autoPlay
    loop
    muted
    style={{ width: '100%', borderRadius: '5px' }}
  />
  <Card.Body>
    <Card.Title>To do list project</Card.Title>
    <Card.Text>
        هذا مشروع بسيط لقائمة المهام حيث يمكنك إضافة مهام جديدة، حذف المهام المكتملة، وتحديث حالة المهام.
    </Card.Text>
  </Card.Body>
</Card>


  <Card style={{ width: '25rem' }}>
  <video
    src="/videos/main.mp4"
    controls
    autoPlay
    loop
    muted
    style={{ width: '100%', borderRadius: '5px' }}
  />
  <Card.Body>
    <Card.Title>store project</Card.Title>
    <Card.Text>
        هذا مشروع بسيط لمتجر إلكتروني حيث يمكنك تصفح المنتجات، إضافتها إلى السلة، وإتمام عملية الشراء. من خلال ارسال الطلب الى قسم المبيعات على الواتس اب
    </Card.Text>
  </Card.Body>
</Card>
  <Card style={{ width: '25rem' }}>
  <video
    src="/videos/storeg.mp4"
    controls
    autoPlay
    loop
    muted
    style={{ width: '100%', borderRadius: '5px' }}
  />
  <Card.Body>
    <Card.Title>Warehouse system</Card.Title>
    <Card.Text>
        هذا مشروع  لنظام إدارة المخازن حيث يمكنك تتبع المخزون، إضافة منتجات جديدة، وتحديث حالة المنتجات.يساعد في عمليات الجرد بشكل كبير ويمكنك اضاقة عدد لا نهائي من المنتجات
    </Card.Text>
  </Card.Body>
</Card>
 







    </div>
  );


  
}


export default CardExample;