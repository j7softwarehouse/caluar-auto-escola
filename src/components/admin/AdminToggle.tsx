export default function AdminToggle() {
  return (
    <>
      <style>{`
        @keyframes pulse-subtle {
          0%, 100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7); }
          50% { box-shadow: 0 0 0 10px rgba(37, 211, 102, 0); }
        }
        .whatsapp-button {
          animation: pulse-subtle 3s infinite;
        }
      `}</style>

      {/* Desktop: Botão com frase */}
      <a
        href="https://wa.me/553135633619?text=Oi%20Caluar,%20quero%20minha%20CNH!"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden lg:flex fixed bottom-8 right-8 items-center gap-3 bg-white border border-gray-200 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 z-30 px-5 py-3 group"
        aria-label="WhatsApp"
        title="Fale conosco no WhatsApp"
      >
        <div className="whatsapp-button w-12 h-12 bg-[#25D366] text-white rounded-full flex items-center justify-center flex-shrink-0 transition-transform group-hover:bg-[#1BAD56]">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.149.547 4.171 1.502 5.923L0 24l6.338-1.467C8.731 23.381 10.334 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.432 0-2.82-.333-4.034-.92l-.289-.155-3.002.694.707-2.833-.188-.293C2.239 16.756 1.5 14.5 1.5 12c0-5.705 4.645-10.35 10.35-10.35 5.704 0 10.35 4.645 10.35 10.35S17.704 21.75 12 21.75z"/>
            <path d="M17.415 14.413c-.294-.148-1.738-.859-2.008-.955-.27-.097-.467-.146-.664.146-.196.293-.762.954-.933 1.15-.17.196-.34.22-.633.074-.294-.147-1.24-.457-2.361-1.456-.873-.774-1.462-1.73-1.633-2.024-.17-.295-.018-.453.128-.599.132-.131.294-.342.441-.513.147-.17.196-.294.294-.49.098-.196.05-.367-.025-.513-.075-.146-.664-1.597-.91-2.187-.24-.572-.483-.494-.664-.503-.171-.008-.368-.01-.565-.01-.196 0-.514.074-.783.367-.269.293-1.027 1.003-1.027 2.444 0 1.44 1.052 2.838 1.198 3.034.147.196 2.064 3.157 5.008 4.42.701.3 1.25.483 1.677.618.704.226 1.346.194 1.854.117.565-.084 1.738-.71 1.983-1.396.245-.686.245-1.273.17-1.396-.074-.123-.27-.196-.566-.343z"/>
          </svg>
        </div>
        <div className="flex flex-col gap-0">
          <span className="text-sm font-semibold text-gray-800">Dúvidas?</span>
          <span className="text-xs text-gray-600">Fale conosco agora</span>
        </div>
      </a>

      {/* Mobile: Botão flutuante simples */}
      <a
        href="https://wa.me/553135633619?text=Oi%20Caluar,%20quero%20minha%20CNH!"
        target="_blank"
        rel="noopener noreferrer"
        className="lg:hidden fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#1BAD56] z-30 flex items-center justify-center transition-transform hover:scale-110"
        aria-label="WhatsApp"
        title="Fale conosco no WhatsApp"
      >
        <div className="whatsapp-button">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.149.547 4.171 1.502 5.923L0 24l6.338-1.467C8.731 23.381 10.334 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.432 0-2.82-.333-4.034-.92l-.289-.155-3.002.694.707-2.833-.188-.293C2.239 16.756 1.5 14.5 1.5 12c0-5.705 4.645-10.35 10.35-10.35 5.704 0 10.35 4.645 10.35 10.35S17.704 21.75 12 21.75z"/>
            <path d="M17.415 14.413c-.294-.148-1.738-.859-2.008-.955-.27-.097-.467-.146-.664.146-.196.293-.762.954-.933 1.15-.17.196-.34.22-.633.074-.294-.147-1.24-.457-2.361-1.456-.873-.774-1.462-1.73-1.633-2.024-.17-.295-.018-.453.128-.599.132-.131.294-.342.441-.513.147-.17.196-.294.294-.49.098-.196.05-.367-.025-.513-.075-.146-.664-1.597-.91-2.187-.24-.572-.483-.494-.664-.503-.171-.008-.368-.01-.565-.01-.196 0-.514.074-.783.367-.269.293-1.027 1.003-1.027 2.444 0 1.44 1.052 2.838 1.198 3.034.147.196 2.064 3.157 5.008 4.42.701.3 1.25.483 1.677.618.704.226 1.346.194 1.854.117.565-.084 1.738-.71 1.983-1.396.245-.686.245-1.273.17-1.396-.074-.123-.27-.196-.566-.343z"/>
          </svg>
        </div>
      </a>
    </>
  )
}
