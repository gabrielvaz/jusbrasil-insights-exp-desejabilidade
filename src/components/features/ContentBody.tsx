export function ContentBody() {
    return (
        <div className="flex flex-col gap-6 mt-6">
            <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Ementa</h2>
                <p className="text-gray-900 leading-relaxed font-serif text-lg">
                    <span className="font-bold underline decoration-[#00897b] decoration-2 underline-offset-2">DANO MORAL</span> - FATO CONSTITUTIVO DO DIREITO DA PARTE AUTORA - ÔNUS DA PROVA DO OFENDIDO.
                </p>
            </div>

            <div className="text-gray-800 leading-relaxed space-y-4 font-serif text-lg">
                <p>
                    Em relação ao ônus da prova do dano moral cabe ao ofendido (art. <a href="#" className="text-blue-600 hover:underline">818</a> da <a href="#" className="text-blue-600 hover:underline">CLT</a> e art. <a href="#" className="text-blue-600 hover:underline">373, I</a>, do <a href="#" className="text-blue-600 hover:underline">CPC</a>), que deve demonstrar de forma inequívoca a ocorrência de lesão a seus bens imateriais.
                </p>
                <p>
                    A condenação decorrente do dano moral só se justifica nos casos em que o ato imputado como causador seja ilícito e de tal modo lesivo que venha a deixar profundas cicatrizes no âmbito psicológico e emocional da pessoa.
                </p>
                <p>
                    Dano moral não comprovado. Negado provimento ao recurso da autora.
                </p>
            </div>

            <hr className="my-4 border-gray-200" />

            {/* Related Info Mock */}
            <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Informações relacionadas</h3>
                <div className="bg-gray-50 border border-gray-100 p-4 rounded-lg">
                    <a href="#" className="font-bold text-jusbrasil-green hover:underline mb-2 block">
                        Tribunal Regional do Trabalho da 12ª Região TRT-12 - RECURSO ORDINARIO TRABALHISTA: ROT 0000920-10.2021.5.12.0056
                    </a>
                    <p className="text-xs text-gray-500 mb-2">Jurisprudência • Acórdão • Data de publicação: 27/01/2023</p>
                    <p className="text-sm text-gray-700 line-clamp-3">
                        DANO MORAL. ÔNUS DA PROVA. O ônus da prova dos fatos que embasam o pedido de indenização por dano moral é da parte autora...
                    </p>
                </div>
            </div>
        </div>
    );
}
