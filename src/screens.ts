export type ScreenCategory =
  | 'fitness'
  | 'music'
  | 'culinary'
  | 'travel'
  | 'wellness'
  | 'home'
  | 'finance';

export interface MobileScreen {
  slug: string;
  title: string;
  category: ScreenCategory;
}

export const SCREEN_CATEGORIES: Record<ScreenCategory, string> = {
  fitness: 'Fitness',
  music: 'Music',
  culinary: 'Culinary',
  travel: 'Travel',
  wellness: 'Wellness',
  home: 'Smart Home',
  finance: 'Finance',
};

export const MOBILE_SCREENS: MobileScreen[] = [
  { slug: 'treinos', title: 'Treinos', category: 'fitness' },
  { slug: 'desafios', title: 'Desafios', category: 'fitness' },
  { slug: 'detalhes_do_exerc_cio', title: 'Detalhes do Exercicio', category: 'fitness' },
  { slug: 'gr_ficos_de_progresso', title: 'Graficos de Progresso', category: 'fitness' },

  { slug: 'explorar_m_sica', title: 'Explorar Musica', category: 'music' },
  { slug: 'player_de_m_sica', title: 'Player de Musica', category: 'music' },
  { slug: 'biblioteca_de_m_sica', title: 'Biblioteca de Musica', category: 'music' },
  { slug: 'perfil_do_artista_kira_99', title: 'Perfil do Artista', category: 'music' },

  { slug: 'descoberta_de_receitas', title: 'Descoberta de Receitas', category: 'culinary' },
  { slug: 'detalhes_da_receita', title: 'Detalhes da Receita', category: 'culinary' },
  { slug: 'discovery_shop', title: 'Discovery Shop', category: 'culinary' },
  { slug: 'detalhes_do_produto', title: 'Detalhes do Produto', category: 'culinary' },
  { slug: 'carrinho_de_compras', title: 'Carrinho de Compras', category: 'culinary' },
  { slug: 'finalizar_compra', title: 'Finalizar Compra', category: 'culinary' },
  { slug: 'perfil_do_chef', title: 'Perfil do Chef', category: 'culinary' },

  { slug: 'explorar_destinos', title: 'Explorar Destinos', category: 'travel' },
  { slug: 'detalhes_da_viagem', title: 'Detalhes da Viagem', category: 'travel' },
  { slug: 'perfil_do_viajante', title: 'Perfil do Viajante', category: 'travel' },

  { slug: 'sess_es_de_medita_o', title: 'Sessoes de Meditacao', category: 'wellness' },
  { slug: 'perfil_do_usu_rio', title: 'Perfil do Usuario', category: 'wellness' },

  { slug: 'dashboard_aura_home', title: 'Dashboard Aura Home', category: 'home' },
  { slug: 'painel_de_controle_1', title: 'Painel de Controle 1', category: 'home' },
  { slug: 'painel_de_controle_2', title: 'Painel de Controle 2', category: 'home' },
  { slug: 'configura_es_de_dispositivo', title: 'Configuracoes de Dispositivo', category: 'home' },
  { slug: 'consumo_de_energia', title: 'Consumo de Energia', category: 'home' },
  { slug: 'ilumina_o', title: 'Iluminacao', category: 'home' },
  { slug: 'seguran_a', title: 'Seguranca', category: 'home' },
  { slug: 'automa_es', title: 'Automacoes', category: 'home' },

  { slug: 'wealth_vault_dashboard', title: 'Wealth Vault Dashboard', category: 'finance' },
];
