
function Gallery() {
  const images = [
    {
      url: "https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/488942738_2079008872605784_1857509002366225754_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHdfFd1jpQCbEvpojs9JN0pDkmEnpGEJY8OSYSekYQlj-pk8xT90SaYe2rUm0AhM8RCjQECQeugyCKQ2hek5X4J&_nc_ohc=NNxkFI1eu8IQ7kNvwFoDnCa&_nc_oc=Adm-eBPrndtvXCempD8zMPEaC2R3osmX49r73Wi4cn83nQUerjresN4TMLI8pAyS_q4&_nc_zt=23&_nc_ht=scontent.fdac24-2.fna&_nc_gid=VXK-jsW83tJb411Edmw5Jg&oh=00_AfEi7mnup_L2zlObk13_OOH7hMu98GgAuoaaqaZZaf12mQ&oe=67FBE1B6",
      title: "IIT DAY 2025"
    },
    {
      url: "https://scontent.fdac24-4.fna.fbcdn.net/v/t39.30808-6/481178564_2047160469123958_1730046295061071501_n.jpg?stp=dst-jpg_s720x720_tt6&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHZX_XU4_X9vJvgjhZJrqpPZII49P8ts2dkgjj0_y2zZzm6swYnHMgR15NUCChJhAZwXni9zm7HIDLWQ06ki_8Q&_nc_ohc=1P8sSXYr5JgQ7kNvwEgo-ZO&_nc_oc=AdmXAE3Tuooyvd-ZyXMQf-KOeCBB8r1YwyjXEma66OhW8nxOJVxRSggTW0OPrEnF1FM&_nc_zt=23&_nc_ht=scontent.fdac24-4.fna&_nc_gid=7U_ZvKHJcshka2Q0uekFZQ&oh=00_AfGwMwmAmsgc8B6YWeTkCRnQzjYL9BfkPZGIL3FsfuERZQ&oe=67FBFB6F",
      title: "IEEE committee"
    },
    {
      url: "https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/480746387_2040285129811492_5570965628213399445_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEp7gbBN6c8stD0Jj5TKjddvfDNlzw2ZG298M2XPDZkbfzUraWUcvC4eygpvbDPh5ZcuSIOhv2M1mNpDZ_UieTK&_nc_ohc=sJC8blweLhsQ7kNvwEYDbNE&_nc_oc=AdlNJzuNgbkD62o-c6nORKzLNHEA8ED7qYn0BtBdNI4GJVhL0YLyQbXonV2faYmLeYk&_nc_zt=23&_nc_ht=scontent.fdac24-2.fna&_nc_gid=xJGr4YjfmS_rD1qIGVWeXA&oh=00_AfHe_0p89NSANnCYqTT6_rOU1MRVILQAa53pDn91mVNhOA&oe=67FBF413",
      title: "ITverse 2023"
    },
    {
      url: "https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/480038365_2033720870467918_6361096301985709047_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHpWDbq8aSxd0IUQVrhpDqQARLRt-Il1kkBEtG34iXWSQZYVsOlXvSIr7ODWrqc7QDfHujgnwB9EMahqrTgE3_W&_nc_ohc=K51NYnfUWfIQ7kNvwE0CNZC&_nc_oc=AdlwI2xZs1jnay8p9VbvOFX_TewGhur_nHp3_btXq1SeXwwXO3f5X1cr2e4iQALD0hk&_nc_zt=23&_nc_ht=scontent.fdac24-2.fna&_nc_gid=PnIY3EvnPeHlXg5ftbJcYQ&oh=00_AfEwGXaxZdEkZEsAADHPUF6LTiCC6Y_Z5O6bB7gBxeX_hQ&oe=67FBCD76",
      title: "Flutter Frenzy 2023"
    },
    {
      url: "https://scontent.fdac24-4.fna.fbcdn.net/v/t39.30808-6/480874944_2042075169632488_8769647724742371119_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGkqAaRaflpGa5KujhOHBFI7JkOWcxoRxbsmQ5ZzGhHFr-wnTTcVqburhD8LmHXu6A7_ubSykzfJkgwxM-sFfJl&_nc_ohc=aDmsZt773YEQ7kNvwHPKZzN&_nc_oc=AdnC4yUxcLqMjBiXVBfdSG_38J9XdhLiZTJMAvBlU10lDkP5LLAhwTSNYaWvr4PgUQo&_nc_zt=23&_nc_ht=scontent.fdac24-4.fna&_nc_gid=bZtpf3UIm217I_pgelN5zQ&oh=00_AfF1qHnm-jj-b4117yEWR1PkGZajy7ul4O69ynqoGYIRXw&oe=67FC0011",
      title: "IIT SOFTWARE ENGINEERS COMUNITY"
    },
    {
      url: "https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/481348768_2048451812328157_8151782372469658488_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHaMCYQ6oBhihN-GKagMtugarmvVeS5xZxqua9V5LnFnE5ue5pWURQ2zNRS30F5EU_mCRaVUSrYmdrcfFR7eCVA&_nc_ohc=G0ibflkGCCIQ7kNvwG66ZRr&_nc_oc=AdmijBsO1y7f3BmIgAFkg4GqsoSKTH5gRryCmg0DVivbP-zd7YAmyK8qzI13n_H93Hg&_nc_zt=23&_nc_ht=scontent.fdac24-2.fna&_nc_gid=IrX3pCCSa2zQ2sU87IMWaA&oh=00_AfExTgceT2GgpEgvEQL_wrbpmcNVYl4TrsvJELN6U9hrAg&oe=67FC00D1",
      title: "Cefalo Bangladesh Organization visit"
    },
    {
      url: "https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/480824010_2045889202584418_7763278425167602845_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEEfaHv_OjKanwx9BXW3Qt1Yhcjfzc6WEdiFyN_NzpYR5RaZZNBpIXCjutCoOa9NSQLmLW6ZNRcm7zkEJPLCOjl&_nc_ohc=b5p3aT-PcMoQ7kNvwGZkCio&_nc_oc=Adly_vS33GzTGIKGjOUeUhaDfwfkfDksKZQ5p4e6eA0jobVyln-63Y1FWWoPY30K6ps&_nc_zt=23&_nc_ht=scontent.fdac24-2.fna&_nc_gid=QrWqm_dVGfkw35Gr7IqcyQ&oh=00_AfHPSvbuNBIaaF4xUr8pKoFh-H_WuJf78ehYX76rAZI4qA&oe=67FBFB37",
      title: "Optimizely Organization visit"
    },
    {
      url: "https://scontent.fdac24-4.fna.fbcdn.net/v/t39.30808-6/480798217_2042074356299236_8788814797812666889_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=86c6b0&_nc_eui2=AeHTEhq9o6pFbHWC8yD3mA9dpCKQV59XHh2kIpBXn1ceHW9_z4UlVIgjlvVqY4vNOOqC2-Vntczeyc_SU9tTv5qQ&_nc_ohc=7bU5eJUpn48Q7kNvwH-fMcY&_nc_oc=AdmAOBtfnbrpr4nPxmGqygOmf18GPRFad0HvSdutT6LhIxohxVzj5WlHrwcXnuYTv04&_nc_zt=23&_nc_ht=scontent.fdac24-4.fna&_nc_gid=iRhaTaN0KCxlCdC_ac1STQ&oh=00_AfE0V-LdkTHnx_KXdlETZbSQ90ESqvfXhp1X6q6NRmm5iA&oe=67FBFA13",
      title: "BSSE 14 "
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">Gallery</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {images.map((image, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-center">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;