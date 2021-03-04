import AvatarImg from "./avatar";
import FullName from "./full_name";
import DescriptionBlock from "./description_block";
import ContactButton from "./contact_us_button";

function InfoSection(prosp) {
  return (
    <section className='info-block'>
      <AvatarImg />
      <FullName name={prosp.info.name}/>
      <DescriptionBlock descrip={prosp.info.description}/>
      <ContactButton />
    </section>
  )
}

export default InfoSection;