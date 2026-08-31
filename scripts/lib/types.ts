export interface Source {
  id: string
  name: string
  rss_url?: string
  filter_keywords?: string[]
  include_title_patterns?: string[]
  exclude_title_patterns?: string[]
  lookback_days?: number
  episode_limit?: number
  auto_tag?: boolean
  color?: string
  description?: string
  min_duration?: number
  min_date?: string
  cache_limit?: number
  use_keywords_in_plan?: boolean
}

export interface SourcesFile {
  sources: Source[]
}

export type EpisodeStatus =
  | 'queued'
  | 'needs_transcript'
  | 'transcribing'
  | 'transcribe_failed'
  | 'downloading'
  | 'downloaded'
  | 'generating'
  | 'generated'
  | 'audit_failed'
  | 'failed'

export interface Episode {
  id: string
  source: string
  title: string
  url: string
  published?: string
  published_sort?: string
  duration?: string
  tags?: string[]
  status: EpisodeStatus
  slides_path?: string
  error?: string
}

export interface EpisodeMeta extends Episode {
  guest?: string
  guest_role?: string
  thumbnail?: string
  summary?: string
  core_ideas?: string[]
  article_path?: string
  base?: string
  category?: string
  generated_at?: string
}

export interface EpisodesFile {
  episodes: Episode[]
}

export interface QueueEntry {
  id: string
  source: string
  title: string
  url: string
  published?: string
}

export interface QueueFile {
  queue: QueueEntry[]
}

export type PlanEntryStatus =
  | 'pending'
  | 'needs_transcript'
  | 'transcribing'
  | 'transcribe_failed'
  | 'downloaded'
  | 'generated'
  | 'audit_failed'
  | 'failed'

export interface PlanEntry {
  id: string
  guid?: string
  title: string
  duration: number
  published?: string
  published_sort?: string
  first_seen_at?: string
  url: string
  audio_url?: string
  image?: string
  transcript_url?: string
  transcript_type?: string
  transcripts?: { url: string; type: string; language?: string }[]
  summary?: string
  status: PlanEntryStatus
  category?: string
  priority: number
  transcript_provider?: 'rss' | 'dashscope' | 'mimo'
  transcript_job_id?: string
  transcript_submitted_at?: string
  transcript_completed_at?: string
  transcript_error?: string
}

export interface PlanFile {
  source: string
  refreshed_at: string
  min_duration: number
  min_date: string
  total_candidates: number
  done: number
  pending: number
  needs_transcript?: number
  transcribing?: number
  transcribe_failed?: number
  downloaded?: number
  episodes: PlanEntry[]
}

export interface TranscriptionJob {
  key: string
  id: string
  source: string
  title: string
  audio_url: string
  task_id: string
  provider?: 'dashscope' | 'mimo'
  submission_mode?: 'url' | 'data_uri'
  parent_key?: string
  attempt_key?: string
  chunk_index?: number
  chunk_count?: number
  status: 'submitting' | 'submitted' | 'running' | 'succeeded' | 'failed'
  transcription_url?: string
  retries?: number
  submitted_at: string
  updated_at: string
  completed_at?: string
  error?: string
}

export interface TranscriptionJobsFile {
  jobs: TranscriptionJob[]
}
