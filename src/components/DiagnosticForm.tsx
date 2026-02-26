import { useState, FormEvent } from 'react';
import { CheckCircle2, Loader2 } from 'lucide-react';

interface FormData {
  name: string;
  companyName: string;
  whatsapp: string;
  email: string;
  mainChallenge: string;
  trackIndicators: string;
  hasStrategicPlan: string;
  monthlyRevenue: string;
}

interface DiagnosticFormProps {
  onSubmitSuccess: () => void;
}

export default function DiagnosticForm({ onSubmitSuccess }: DiagnosticFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    companyName: '',
    whatsapp: '',
    email: '',
    mainChallenge: '',
    trackIndicators: '',
    hasStrategicPlan: '',
    monthlyRevenue: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) newErrors.name = 'Nome é obrigatório';
    if (!formData.companyName.trim()) newErrors.companyName = 'Nome da empresa é obrigatório';
    if (!formData.whatsapp.trim()) newErrors.whatsapp = 'WhatsApp é obrigatório';
    if (!formData.email.trim()) newErrors.email = 'Email é obrigatório';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email inválido';
    if (!formData.mainChallenge) newErrors.mainChallenge = 'Selecione uma opção';
    if (!formData.trackIndicators) newErrors.trackIndicators = 'Selecione uma opção';
    if (!formData.hasStrategicPlan) newErrors.hasStrategicPlan = 'Selecione uma opção';
    if (!formData.monthlyRevenue) newErrors.monthlyRevenue = 'Selecione uma opção';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const { supabase } = await import('../lib/supabase');
      const { error } = await supabase.from('diagnostic_submissions').insert([
        {
          name: formData.name,
          company_name: formData.companyName,
          whatsapp: formData.whatsapp,
          email: formData.email,
          main_challenge: formData.mainChallenge,
          track_indicators: formData.trackIndicators,
          has_strategic_plan: formData.hasStrategicPlan,
          monthly_revenue: formData.monthlyRevenue,
        },
      ]);

      if (error) {
        console.error('Error submitting form:', error);
        alert('Erro ao enviar formulário. Tente novamente.');
      } else {
        onSubmitSuccess();
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Erro ao enviar formulário. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <section id="diagnostico" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Diagnóstico Empresarial Gratuito
            </h2>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-2xl text-blue-100 mb-4">
              Descubra o que está travando o crescimento da sua empresa.
            </p>
            <p className="text-xl text-blue-200">
              Responda 6 perguntas rápidas e receba uma análise inicial estratégica.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Nome *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    autoComplete="name"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                    placeholder="Seu nome completo"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="companyName" className="block text-gray-700 font-semibold mb-2">Nome da Empresa *</label>
                  <input
                    id="companyName"
                    name="companyName"
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => handleChange('companyName', e.target.value)}
                    autoComplete="organization"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.companyName ? 'border-red-500' : 'border-gray-300'
                      }`}
                    placeholder="Nome da sua empresa"
                  />
                  {errors.companyName && <p className="text-red-500 text-sm mt-1">{errors.companyName}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="whatsapp" className="block text-gray-700 font-semibold mb-2">WhatsApp *</label>
                  <input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    value={formData.whatsapp}
                    onChange={(e) => handleChange('whatsapp', e.target.value)}
                    autoComplete="tel"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.whatsapp ? 'border-red-500' : 'border-gray-300'
                      }`}
                    placeholder="(11) 99999-9999"
                  />
                  {errors.whatsapp && <p className="text-red-500 text-sm mt-1">{errors.whatsapp}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">E-mail *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    autoComplete="email"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                    placeholder="seu@email.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="border-t pt-6 mt-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Perguntas Estratégicas</h3>

                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-3">
                      Qual é hoje o maior desafio da sua empresa? *
                    </label>
                    <div className="space-y-2">
                      {[
                        'Falta de controle financeiro',
                        'Vendas baixas ou instáveis',
                        'Equipe desorganizada ou desmotivada',
                        'Falta de processos definidos',
                        'Não sei exatamente onde está o problema',
                      ].map((option) => (
                        <label key={option} className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-3 rounded-lg transition-colors">
                          <input
                            type="radio"
                            name="mainChallenge"
                            value={option}
                            checked={formData.mainChallenge === option}
                            onChange={(e) => handleChange('mainChallenge', e.target.value)}
                            className="w-5 h-5 text-blue-600"
                          />
                          <span className="text-gray-700">{option}</span>
                        </label>
                      ))}
                    </div>
                    {errors.mainChallenge && <p className="text-red-500 text-sm mt-1">{errors.mainChallenge}</p>}
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-3">
                      Você acompanha indicadores de desempenho? *
                    </label>
                    <div className="space-y-2">
                      {[
                        'Sim, acompanho regularmente',
                        'Às vezes',
                        'Não acompanho',
                        'Não sei quais indicadores usar',
                      ].map((option) => (
                        <label key={option} className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-3 rounded-lg transition-colors">
                          <input
                            type="radio"
                            name="trackIndicators"
                            value={option}
                            checked={formData.trackIndicators === option}
                            onChange={(e) => handleChange('trackIndicators', e.target.value)}
                            className="w-5 h-5 text-blue-600"
                          />
                          <span className="text-gray-700">{option}</span>
                        </label>
                      ))}
                    </div>
                    {errors.trackIndicators && <p className="text-red-500 text-sm mt-1">{errors.trackIndicators}</p>}
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-3">
                      Sua empresa possui metas claras e plano estratégico? *
                    </label>
                    <div className="space-y-2">
                      {['Sim', 'Parcialmente', 'Não'].map((option) => (
                        <label key={option} className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-3 rounded-lg transition-colors">
                          <input
                            type="radio"
                            name="hasStrategicPlan"
                            value={option}
                            checked={formData.hasStrategicPlan === option}
                            onChange={(e) => handleChange('hasStrategicPlan', e.target.value)}
                            className="w-5 h-5 text-blue-600"
                          />
                          <span className="text-gray-700">{option}</span>
                        </label>
                      ))}
                    </div>
                    {errors.hasStrategicPlan && <p className="text-red-500 text-sm mt-1">{errors.hasStrategicPlan}</p>}
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-3">
                      Qual o faturamento médio mensal? *
                    </label>
                    <div className="space-y-2">
                      {[
                        'Até 50 mil',
                        '50 a 150 mil',
                        '150 a 500 mil',
                        'Acima de 500 mil',
                      ].map((option) => (
                        <label key={option} className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-3 rounded-lg transition-colors">
                          <input
                            type="radio"
                            name="monthlyRevenue"
                            value={option}
                            checked={formData.monthlyRevenue === option}
                            onChange={(e) => handleChange('monthlyRevenue', e.target.value)}
                            className="w-5 h-5 text-blue-600"
                          />
                          <span className="text-gray-700">{option}</span>
                        </label>
                      ))}
                    </div>
                    {errors.monthlyRevenue && <p className="text-red-500 text-sm mt-1">{errors.monthlyRevenue}</p>}
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-4 px-8 rounded-lg text-lg font-semibold flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-lg disabled:transform-none"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    Enviando...
                  </>
                ) : (
                  <>
                    <CheckCircle2 size={20} />
                    Receber meu Diagnóstico Gratuito
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
