// Generated by https://quicktype.io

export interface EpisodesResponse {
  info:    InfoEpisodes;
  results: Episode[];
}

export interface InfoEpisodes {
  count: number;
  pages: number;
  next:  string;
  prev:  null;
}

export interface Episode {
  id:         number;
  name:       string;
  air_date:   string;
  episode:    string;
  characters: string[];
  url:        string;
  created:    string;
}
