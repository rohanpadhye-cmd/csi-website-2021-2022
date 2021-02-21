import {Container,Row,Col} from 'react-bootstrap'
const ContactComponent = () => {
    return (
    <Container>
        <Row>
            <Col md={{span:4}}> {/*Google Map Embed */}
            <h1>Address</h1>
            <div className="mapouter">
                <div className="gmap_canvas">
                    <iframe width={500} height={350} id="gmap_canvas" src="https://maps.google.com/maps?q=Vivekanand%20Education%20Society's&t=k&z=13&ie=UTF8&iwloc=&output=embed" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} />
                    <a href="https://soap2day-to.com">soap2day</a>
                    <br />
                    <style dangerouslySetInnerHTML={{__html: ".mapouter{position:relative;text-align:right;height:350px;width:500px;}" }} />
                    <a href="https://www.embedgooglemap.net">google html code</a>
                    <style dangerouslySetInnerHTML={{__html: ".gmap_canvas {overflow:hidden;background:none!important;height:350px;width:500px;}" }} />
                </div>
            </div>
            <br/>
            <p className='college-addr my-auto'>
                Vivekanand Education Society's Institute of Technology,
                Collector's Colony, Chembur, Mumbai-74
                Email address: csi.vesit@ves.ac.in 
                Jatin Bhagchandani: +919619447077 
                2017.jatin.bhagchandani@ves.ac.in 
                (Chairperson)</p>
            </Col>
            <Col md={{span:5 , offset:3}}>
                <h1>Test2</h1>
            </Col>
        </Row>
    </Container>
    );
}
 
export default ContactComponent;