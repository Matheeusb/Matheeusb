import { Award, Book, Briefcase, Code } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Profile = () => {
  const { t } = useTranslation();
  const openSourceProjects = t('profile.openSourceProjects', { returnObjects: true }) as { title: string; rule: string }[];

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <div className="sticky top-24">
                <div className="bg-gray-800 rounded-lg p-6">
                  <img
                    src="src/images/profile.jpeg"
                    alt="Matheus Bereta"
                    className="w-32 h-32 rounded-full mx-auto mb-4"
                  />
                  <h1 className="text-2xl font-bold text-center mb-2">Matheus Bereta</h1>
                  <p className="text-gray-400 text-center mb-4">{t('profile.role')}</p>
                  <div className="border-t border-gray-700 pt-4">
                    <p className="text-gray-300">{t('profile.bio')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-2/3">
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Briefcase className="text-cyan-400" />
                  {t('profile.sections.experience')}
                </h2>
                <div className="space-y-6">
                  <div className="bg-gray-800 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-2">{t('profile.experience.current.title')}</h3>
                    <p className="text-gray-400 mb-4">{t('profile.experience.current.period')}</p>
                    <p className="text-gray-300">{t('profile.experience.current.description')}</p>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-2">{t('profile.experience.previous.title')}</h3>
                    <p className="text-gray-400 mb-4">{t('profile.experience.previous.period')}</p>
                    <p className="text-gray-300">{t('profile.experience.previous.description')}</p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Award className="text-cyan-400" />
                  {t('profile.sections.certifications')}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-800 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      CTFL - Certified Tester Foundation Level</h3>
                    <p className="text-gray-400">2018</p>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      CTFL-AT - Certified Tester Foundation Level - Agile Tester</h3>
                    <p className="text-gray-400">2019</p>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      PSM I - Professional Scrum Master</h3>
                    <p className="text-gray-400">2017</p>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      KMP I - Kanban Management Professional</h3>
                    <p className="text-gray-400">2018</p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Code className="text-cyan-400" />
                  {t('profile.sections.openSource')}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {openSourceProjects.map((project, index) => (
                    <div key={index} className="bg-gray-800 rounded-lg p-6">
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-gray-400">{project.rule}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Book className="text-cyan-400" />
                  {t('profile.sections.skills')}
                </h2>
                <div className="bg-gray-800 rounded-lg p-6">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="bg-gray-700 rounded-lg px-4 py-2 text-center">Appium</div>
                    <div className="bg-gray-700 rounded-lg px-4 py-2 text-center">Selenium</div>
                    <div className="bg-gray-700 rounded-lg px-4 py-2 text-center">RestAssured</div>
                    <div className="bg-gray-700 rounded-lg px-4 py-2 text-center">TestNG</div>
                    <div className="bg-gray-700 rounded-lg px-4 py-2 text-center">JUnit</div>
                    <div className="bg-gray-700 rounded-lg px-4 py-2 text-center">Java</div>
                    <div className="bg-gray-700 rounded-lg px-4 py-2 text-center">Cypress</div>
                    <div className="bg-gray-700 rounded-lg px-4 py-2 text-center">Javascript</div>
                    <div className="bg-gray-700 rounded-lg px-4 py-2 text-center">Maestro</div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;