import InfoSection from "./info_section/info_section";
import SkillSection from "./skill_section/skill_section";

function App() {
  const infoData = {name: 'Eugene Vinogradov',
                    description: 'Manual QA Engineer based in Kamiennaja Horka, Minsk'}


  return (
    <div className='wrapper'>
      <InfoSection info={infoData} />
      <SkillSection />
    </div>
  );
}

export default App;
